import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CatalogService, OrderService, SettingsService, CustomerService } from '../../core/services/domain.services';
import { ToastService } from '../../core/services/toast.service';
import { Category, FashionItem, FashionVariant, Order, Customer } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { LoadingComponent, EmptyStateComponent, SpinnerComponent } from '../../shared/ui/misc';
import { ReceiptDialogComponent } from '../orders/receipt-dialog.component';

interface CartLine { fashion: FashionItem; qty: number; variant?: FashionVariant; }
type OrderTypeT = 'DineIn' | 'Takeaway' | 'Parcel';
interface Ticket { uid: number; tableNumber: string; orderType: OrderTypeT; cart: CartLine[]; }

@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [CommonModule, FormsModule, IconComponent, MoneyPipe, LoadingComponent,
    EmptyStateComponent, SpinnerComponent, ReceiptDialogComponent],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.scss',
})
export class PosComponent {
  private catalog = inject(CatalogService);
  private orders = inject(OrderService);
  private toast = inject(ToastService);
  private settingsSvc = inject(SettingsService);
  private customerSvc = inject(CustomerService);

  // ---- billing wizard: 1) shop  2) customer  3) checkout ----
  step = signal<'shop' | 'customer' | 'checkout'>('shop');
  custSearch = signal('');
  custResults = signal<Customer[]>([]);
  selectedCustomer = signal<Customer | null>(null);
  newCustName = signal('');
  newCustMobile = signal('');

  // checkout adjustments
  addlDiscMode = signal<'%' | '₹'>('%');
  addlDisc = signal(0);
  addlCharges = signal(0);

  /** Default order type comes from Business Settings. */
  defaultOrderType = signal<OrderTypeT>('DineIn');
  /** Next billing number the backend will assign to this bill (preview). */
  billingNo = signal('New Billing');

  loading = signal(true);
  placing = signal(false);
  categories = signal<Category[]>([]);
  fashions = signal<FashionItem[]>([]);
  activeCategory = signal<number | null>(null);
  search = signal('');

  private uidSeq = 1;
  tickets = signal<Ticket[]>([{ uid: 1, tableNumber: '', orderType: this.defaultOrderType(), cart: [] }]);
  activeUid = signal(1);

  paymentOpen = signal(false);
  paymentMethod = signal<'Cash' | 'Upi' | 'Card' | 'Other'>('Cash');
  receiptOrderId = signal<number | null>(null);
  variantPickFor = signal<FashionItem | null>(null);   // fashion whose variant the user is choosing

  active = computed(() => this.tickets().find(t => t.uid === this.activeUid()) ?? this.tickets()[0]);
  cart = computed(() => this.active()?.cart ?? []);

  filteredFashions = computed(() => {
    const s = this.search().trim().toLowerCase();
    return this.fashions().filter(f =>
      (this.activeCategory() === null || f.categoryId === this.activeCategory()) &&
      (!s || f.name.toLowerCase().includes(s)));
  });

  linePrice(l: CartLine): number { return l.variant?.price ?? l.fashion.sellingPrice; }
  subtotal = computed(() => this.cart().reduce((sum, l) => sum + this.linePrice(l) * l.qty, 0));
  tax = computed(() => this.cart().reduce((sum, l) => sum + (this.linePrice(l) * l.qty * l.fashion.taxPercent / 100), 0));
  cgst = computed(() => this.tax() / 2);
  sgst = computed(() => this.tax() / 2);
  total = computed(() => this.subtotal() + this.tax());
  cartCount = computed(() => this.cart().reduce((n, l) => n + l.qty, 0));
  // MRP total across the cart (falls back to selling when a line has no MRP)
  mrpTotal = computed(() => this.cart().reduce((s, l) => {
    const m = (l.variant?.mrp ?? l.fashion.mrp) || 0;
    return s + (m > 0 ? m : this.linePrice(l)) * l.qty;
  }, 0));

  // checkout totals (selling price is tax-inclusive → grand = subtotal − discount + charges)
  productDiscount = computed(() => this.cart().reduce((s, l) => {
    const mrp = (l.variant?.mrp ?? l.fashion.mrp) || 0;
    const price = this.linePrice(l);
    return s + (mrp > price ? (mrp - price) * l.qty : 0);
  }, 0));
  addlDiscValue = computed(() => {
    const st = this.subtotal();
    const d = +this.addlDisc() || 0;
    return this.addlDiscMode() === '%' ? Math.round(st * d) / 100 : d;
  });
  grandTotal = computed(() => Math.max(0, this.subtotal() - this.addlDiscValue()));
  customerLabel = computed(() => this.selectedCustomer()?.name ?? (this.newCustName().trim() || 'Walk-in Customer'));

  constructor() {
    this.loadShopSettings();
    this.catalog.categories(true).subscribe(c => this.categories.set(c));
    this.catalog.posItems().subscribe({
      next: f => { this.fashions.set(f); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  /** Load the shop's default order type + the next billing number (refreshed after each bill). */
  private loadShopSettings() {
    this.settingsSvc.get().subscribe(s => {
      const t = s.defaultOrderType as OrderTypeT;
      if (['DineIn', 'Takeaway', 'Parcel'].includes(t)) {
        this.defaultOrderType.set(t);
        this.tickets.update(list => list.map(tk => tk.cart.length ? tk : { ...tk, orderType: t }));
      }
      if (s.nextBillingNumber) this.billingNo.set(s.nextBillingNumber);
    });
  }

  // ---- tickets ----
  newTicket() {
    const uid = ++this.uidSeq;
    this.tickets.update(list => [...list, { uid, tableNumber: '', orderType: this.defaultOrderType(), cart: [] }]);
    this.activeUid.set(uid);
  }
  selectTicket(uid: number) { this.activeUid.set(uid); }
  closeTicket(uid: number, ev?: Event) {
    ev?.stopPropagation();
    this.tickets.update(list => {
      const next = list.filter(t => t.uid !== uid);
      // all tickets closed -> start fresh at Order 1 instead of an ever-growing number
      if (!next.length) { this.uidSeq = 1; next.push({ uid: 1, tableNumber: '', orderType: this.defaultOrderType(), cart: [] }); }
      if (this.activeUid() === uid) this.activeUid.set(next[next.length - 1].uid);
      return next;
    });
  }
  private patchActive(fn: (t: Ticket) => Ticket) {
    this.tickets.update(list => list.map(t => t.uid === this.activeUid() ? fn(t) : t));
  }
  setTable(v: string) { this.patchActive(t => ({ ...t, tableNumber: v })); }
  setOrderType(v: OrderTypeT) { this.patchActive(t => ({ ...t, orderType: v })); }

  // ---- cart ----
  selectCategory(id: number | null) { this.activeCategory.set(id); }
  /** Items with variants open a picker; plain items go straight to the cart. */
  add(fashion: FashionItem) {
    if (fashion.variants?.length) { this.variantPickFor.set(fashion); return; }
    this.addLine(fashion, undefined);
  }
  addVariant(fashion: FashionItem, variant: FashionVariant) { this.addLine(fashion, variant); this.variantPickFor.set(null); }

  private addLine(fashion: FashionItem, variant?: FashionVariant) {
    this.patchActive(t => {
      const existing = t.cart.find(l => l.fashion.id === fashion.id && l.variant?.id === variant?.id);
      const cart = existing
        ? t.cart.map(l => l === existing ? { ...l, qty: l.qty + 1 } : l)
        : [...t.cart, { fashion, qty: 1, variant }];
      return { ...t, cart };
    });
  }

  /** Cart-row stepper (by index — fashion+variant lines aren't unique by fashion id). */
  changeQtyAt(index: number, delta: number) {
    this.patchActive(t => ({ ...t, cart: t.cart.map((l, i) => i === index ? { ...l, qty: l.qty + delta } : l).filter(l => l.qty > 0) }));
  }
  /** Card stepper (plain items only — matches the single non-variant line). */
  changeQty(id: number, delta: number) {
    this.patchActive(t => ({ ...t, cart: t.cart.map(l => (l.fashion.id === id && !l.variant) ? { ...l, qty: l.qty + delta } : l).filter(l => l.qty > 0) }));
  }
  qtyOf(id: number): number { return this.cart().filter(l => l.fashion.id === id).reduce((n, l) => n + l.qty, 0); }
  minVariantPrice(f: FashionItem): number { return f.variants.length ? Math.min(...f.variants.map(v => v.price)) : f.sellingPrice; }
  cardMrp(f: FashionItem): number {
    const m = f.variants.length ? Math.max(0, ...f.variants.map(v => v.mrp ?? 0)) : (f.mrp ?? 0);
    return m;
  }
  cardSelling(f: FashionItem): number { return f.variants.length ? this.minVariantPrice(f) : f.sellingPrice; }

  // ---- checkout ----
  printBill() {
    if (!this.cart().length) { this.toast.error('Cart is empty.'); return; }
    document.body.classList.add('printing-bill');
    const cleanup = () => { document.body.classList.remove('printing-bill'); window.removeEventListener('afterprint', cleanup); };
    window.addEventListener('afterprint', cleanup);
    setTimeout(() => window.print(), 40);
  }

  openPayment() {
    if (!this.cart().length) { this.toast.error('Add at least one item.'); return; }
    this.paymentMethod.set('Cash');
    this.paymentOpen.set(true);
  }

  confirmPayment() {
    const t = this.active();
    this.placing.set(true);
    const body = {
      customerName: null, customerMobile: null,
      orderType: t.orderType,
      tableNumber: t.tableNumber || null,
      discountAmount: 0,
      paymentMethod: this.paymentMethod(),
      paymentStatus: 'Paid',
      transactionReference: null,
      items: t.cart.map(l => ({ fashionItemId: l.fashion.id, quantity: l.qty, variantId: l.variant?.id ?? null })),
    };
    this.orders.create(body).subscribe({
      next: (o: Order) => {
        this.placing.set(false);
        this.paymentOpen.set(false);
        this.toast.success(`Billing ${o.orderNumber} placed!`);
        this.receiptOrderId.set(o.id);
        this.closeTicket(t.uid);
        this.loadShopSettings();
      },
      error: () => this.placing.set(false),
    });
  }

  onReceiptClosed() { this.receiptOrderId.set(null); }

  // ---- step 2: customer ----
  proceedToCustomer() {
    if (!this.cart().length) { this.toast.error('Add at least one item.'); return; }
    this.loadCustomers('');
    this.step.set('customer');
  }
  loadCustomers(q: string) {
    this.customerSvc.customers({ page: 1, pageSize: 8, search: q }).subscribe({
      next: r => this.custResults.set(r.items), error: () => this.custResults.set([]),
    });
  }
  onCustSearch(v: string) { this.custSearch.set(v); this.loadCustomers(v); }
  pickCustomer(c: Customer) {
    this.selectedCustomer.set(c);
    this.newCustName.set(''); this.newCustMobile.set('');
  }
  clearCustomer() { this.selectedCustomer.set(null); }
  onNewMobile(e: Event) {
    const el = e.target as HTMLInputElement;
    const digits = el.value.replace(/\D/g, '').slice(0, 10);
    el.value = digits; this.newCustMobile.set(digits);
  }
  // ---- step 3: checkout ----
  goCheckout() {
    this.addlDisc.set(0); this.addlCharges.set(0);
    const name = this.newCustName().trim();
    // A newly typed customer is saved to the database right away so it appears in the customer list everywhere.
    if (!this.selectedCustomer() && name) {
      const mobile = this.newCustMobile().trim();
      this.customerSvc.save(null, { name, mobileNumber: mobile || null, email: null }).subscribe({
        next: (res: any) => {
          this.selectedCustomer.set({ id: res?.id, name, mobileNumber: mobile || undefined, totalOrders: 0, totalSpent: 0 } as Customer);
          this.toast.success('Customer added.');
          this.step.set('checkout');
        },
        error: () => this.step.set('checkout'),   // still proceed; order will carry the name/mobile
      });
      return;
    }
    this.step.set('checkout');
  }
  skipCustomer() { this.selectedCustomer.set(null); this.newCustName.set(''); this.newCustMobile.set(''); this.goCheckout(); }
  backToShop() { this.step.set('shop'); }
  backToCustomer() { this.step.set('customer'); }

  completeBilling(method: 'Cash' | 'Online') {
    const t = this.active();
    if (!t.cart.length) { this.toast.error('Cart is empty.'); return; }
    const cust = this.selectedCustomer();
    const name = cust?.name ?? (this.newCustName().trim() || null);
    const mobile = cust?.mobileNumber ?? (this.newCustMobile().trim() || null);
    this.placing.set(true);
    const body = {
      customerName: name, customerMobile: mobile,
      orderType: t.orderType, tableNumber: t.tableNumber || null,
      discountAmount: this.addlDiscValue(),
      paymentMethod: method === 'Online' ? 'Upi' : 'Cash',
      paymentStatus: 'Paid', transactionReference: null,
      items: t.cart.map(l => ({ fashionItemId: l.fashion.id, quantity: l.qty, variantId: l.variant?.id ?? null })),
    };
    this.orders.create(body).subscribe({
      next: (o: Order) => {
        this.placing.set(false);
        this.toast.success(`Billing ${o.orderNumber} placed!`);
        this.receiptOrderId.set(o.id);
        this.selectedCustomer.set(null); this.newCustName.set(''); this.newCustMobile.set('');
        this.addlDisc.set(0); this.addlCharges.set(0);
        this.step.set('shop');
        this.closeTicket(t.uid);
        this.loadShopSettings();
      },
      error: () => this.placing.set(false),
    });
  }

  // ---- fashion image helpers ----
  private failedImages = signal<Set<number>>(new Set());
  onImgError(id: number) { this.failedImages.update(s => new Set(s).add(id)); }
  showImage(f: FashionItem): boolean { return !!f.imageUrl && !this.failedImages().has(f.id); }

  /** Emoji picked from the item name so every card has a colourful visual even without a photo. */
  fashionEmoji(f: FashionItem): string {
    const n = f.name.toLowerCase();
    const map: [string, string][] = [
      ['jean', '👖'], ['trouser', '👖'], ['pant', '👖'], ['short', '🩳'], ['legging', '👖'],
      ['dress', '👗'], ['kurti', '👗'], ['gown', '👗'], ['saree', '🥻'], ['skirt', '👗'], ['top', '👚'], ['blouse', '👚'],
      ['jacket', '🧥'], ['hoodie', '🧥'], ['coat', '🧥'], ['sweat', '🧥'],
      ['shirt', '👕'], ['tee', '👕'], ['t-shirt', '👕'], ['polo', '👕'],
      ['shoe', '👟'], ['sneaker', '👟'], ['sandal', '🩴'], ['boot', '🥾'],
      ['cap', '🧢'], ['hat', '🎩'], ['bag', '👜'], ['wallet', '👛'], ['watch', '⌚'],
      ['sunglass', '🕶️'], ['glass', '🕶️'], ['belt', '🎗️'], ['sock', '🧦'], ['scarf', '🧣'], ['jewel', '💍'], ['ring', '💍'],
    ];
    for (const [k, e] of map) if (n.includes(k)) return e;
    return '👕';
  }

  /** 0-5 gradient variant, stable per item, for tile background variety. */
  tileHue(f: FashionItem): number { return f.id % 6; }
}
