import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { InventoryService, CatalogService } from '../../core/services/domain.services';
import { ToastService } from '../../core/services/toast.service';
import { ConfirmService } from '../../shared/ui/confirm';
import { Ingredient, PagedResult, FashionItem } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { StockStatusBadge } from '../../shared/ui/badges';
import { LoadingComponent, EmptyStateComponent, SpinnerComponent } from '../../shared/ui/misc';
import { PaginatorComponent } from '../../shared/ui/paginator';
import { FashionFormComponent } from '../fashion-items/fashion-form.component';
import { FashionDetailComponent } from '../fashion-items/fashion-detail.component';

@Component({
  selector: 'app-inventory',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, IconComponent, MoneyPipe,
    StockStatusBadge, LoadingComponent, EmptyStateComponent, SpinnerComponent, PaginatorComponent, FashionFormComponent, FashionDetailComponent],
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss',
})
export class InventoryComponent {
  private inv = inject(InventoryService);
  private catalog = inject(CatalogService);
  private toast = inject(ToastService);
  private confirm = inject(ConfirmService);
  private fb = inject(FormBuilder);

  loading = signal(true);
  result = signal<PagedResult<Ingredient> | null>(null);
  page = signal(1);
  search = signal('');
  status = signal('');
  private searchSubject = new Subject<string>();

  // product add/edit modal (rich product form)
  productFormOpen = signal(false);
  editProductId = signal<string | null>(null);
  openProduct() { this.editProductId.set(null); this.productFormOpen.set(true); }
  editProduct(i: Ingredient) { this.editProductId.set(i.productId ?? null); this.productFormOpen.set(true); }
  onProductSaved() { this.productFormOpen.set(false); this.load(); }

  // read-only product details modal
  detailOpen = signal(false);
  detailLoading = signal(false);
  detailItem = signal<FashionItem | null>(null);
  view(i: Ingredient) {
    const pid = i.productId;
    if (!pid) { this.toast.error('Product details not available.'); return; }
    this.detailItem.set(null);
    this.detailLoading.set(true);
    this.detailOpen.set(true);
    this.catalog.fashionItem(pid as unknown as number).subscribe({
      next: f => { this.detailItem.set(f); this.detailLoading.set(false); },
      error: () => { this.detailLoading.set(false); this.detailOpen.set(false); },
    });
  }

  // ingredient add/edit modal
  formOpen = signal(false);
  editId = signal<number | null>(null);
  saving = signal(false);
  form = this.fb.nonNullable.group({
    name: ['', Validators.required], sku: ['', Validators.required], unit: ['g', Validators.required],
    currentStock: [0, Validators.min(0)], minimumStock: [0, Validators.min(0)], costPerUnit: [0, Validators.min(0)],
  });

  // adjustment modal
  adjustOpen = signal(false);
  adjusting = signal(false);
  adjustTarget = signal<Ingredient | null>(null);   // the specific variant being adjusted
  adjustVariants = signal<Ingredient[]>([]);          // all variants of the picked product
  adjustProductName = signal('');
  adjustMode = signal<'add' | 'reduce'>('add');
  adjustQty = signal(0);   // mirrors the quantity input so the preview/validation stay reactive
  adjustForm = this.fb.nonNullable.group({
    quantity: [0, [Validators.required, Validators.min(1)]],
    reason: ['Purchase', Validators.required],
    notes: [''],
  });
  addReasons = ['Purchase', 'Return', 'New Stock', 'Correction', 'Other'];
  reduceReasons = ['Wastage', 'Damaged', 'Expired', 'Theft / Loss', 'Correction', 'Other'];
  reasonsFor(): string[] { return this.adjustMode() === 'add' ? this.addReasons : this.reduceReasons; }

  setAdjustMode(m: 'add' | 'reduce') {
    this.adjustMode.set(m);
    this.adjustForm.patchValue({ reason: this.reasonsFor()[0] });
  }
  onQtyInput() { this.adjustQty.set(+this.adjustForm.getRawValue().quantity || 0); }

  /** Enabled only when a real quantity is entered (>= 1) and a reduce can't exceed current stock. */
  canApply(): boolean {
    const t = this.adjustTarget();
    const qty = this.adjustQty();
    if (!t || qty < 1) return false;
    if (this.adjustMode() === 'reduce' && qty > t.currentStock) return false;
    return true;
  }

  constructor() {
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe(v => { this.search.set(v); this.page.set(1); this.load(); });
    this.load();
  }

  load() {
    this.loading.set(true);
    this.inv.ingredients({ page: this.page(), pageSize: 10, search: this.search(), status: this.status() })
      .subscribe({ next: r => { this.result.set(r); this.loading.set(false); }, error: () => this.loading.set(false) });
  }
  imgErr = signal<Set<number>>(new Set());
  onImgErr(id: number) { this.imgErr.update(s => { s.add(id); return new Set(s); }); }
  emoji(name: string): string {
    const n = (name || '').toLowerCase();
    const map: [string, string][] = [
      ['jean', '👖'], ['trouser', '👖'], ['pant', '👖'], ['short', '🩳'], ['legging', '👖'],
      ['dress', '👗'], ['kurti', '👗'], ['gown', '👗'], ['saree', '🥻'], ['skirt', '👗'], ['top', '👚'], ['blouse', '👚'],
      ['jacket', '🧥'], ['hoodie', '🧥'], ['coat', '🧥'], ['sweat', '🧥'],
      ['shirt', '👕'], ['tee', '👕'], ['polo', '👕'],
      ['shoe', '👟'], ['sneaker', '👟'], ['sandal', '🩴'], ['boot', '🥾'],
      ['cap', '🧢'], ['hat', '🎩'], ['bag', '👜'], ['wallet', '👛'], ['watch', '⌚'],
      ['sunglass', '🕶️'], ['glass', '🕶️'], ['belt', '🎗️'], ['sock', '🧦'], ['scarf', '🧣'], ['jewel', '💍'], ['ring', '💍'],
    ];
    for (const [k, e] of map) if (n.includes(k)) return e;
    return '👕';
  }

  onSearch(v: string) { this.searchSubject.next(v); }
  changeFilter() { this.page.set(1); this.load(); }
  goPage(p: number) { this.page.set(p); this.load(); }

  add() { this.editId.set(null); this.form.reset({ name: '', sku: '', unit: 'g', currentStock: 0, minimumStock: 0, costPerUnit: 0 }); this.formOpen.set(true); }
  edit(i: Ingredient) { this.editId.set(i.id); this.form.reset({ name: i.name, sku: i.sku, unit: i.unit, currentStock: i.currentStock, minimumStock: i.minimumStock, costPerUnit: i.costPerUnit }); this.formOpen.set(true); }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    this.inv.saveIngredient(this.editId(), this.form.getRawValue()).subscribe({
      next: () => { this.saving.set(false); this.formOpen.set(false); this.toast.success('Product saved.'); this.load(); },
      error: () => this.saving.set(false),
    });
  }

  openAdjust(i: Ingredient) {
    this.adjustMode.set('add');
    this.adjustQty.set(0);
    this.adjustForm.reset({ quantity: 0, reason: this.addReasons[0], notes: '' });
    this.adjustProductName.set(i.name);
    this.adjustVariants.set([]);
    this.adjustTarget.set(null);
    this.adjustOpen.set(true);
    // A list row is a whole product now — load its variants so the user picks which one to adjust.
    const pid = i.productId;
    if (!pid) { this.adjustTarget.set(i); this.adjustVariants.set([i]); return; }
    this.inv.variantsByProduct(pid).subscribe({
      next: vs => { this.adjustVariants.set(vs); if (vs.length === 1) this.adjustTarget.set(vs[0]); },
      error: () => { this.adjustTarget.set(i); this.adjustVariants.set([i]); },
    });
  }
  pickVariant(variantId: string) {
    this.adjustTarget.set(this.adjustVariants().find(v => String(v.id) === String(variantId)) ?? null);
    this.adjustQty.set(0);
    this.adjustForm.patchValue({ quantity: 0 });
  }
  submitAdjust() {
    const t = this.adjustTarget(); if (!t || !this.canApply()) return;
    const v = this.adjustForm.getRawValue();
    const signed = this.adjustMode() === 'add' ? +v.quantity : -Math.abs(+v.quantity);
    this.adjusting.set(true);
    this.inv.adjust({ ingredientId: t.id, quantity: signed, reason: v.reason, notes: v.notes }).subscribe({
      next: () => { this.adjusting.set(false); this.adjustOpen.set(false); this.toast.success('Stock adjusted.'); this.load(); },
      error: () => this.adjusting.set(false),
    });
  }
  newStockPreview(): number {
    const t = this.adjustTarget(); if (!t) return 0;
    const qty = this.adjustQty();
    return this.adjustMode() === 'add' ? t.currentStock + qty : t.currentStock - qty;
  }

  async remove(i: Ingredient) {
    const ok = await this.confirm.ask({ title: 'Delete product?', message: `“${i.name}” and its variants will be removed.`, confirmText: 'Delete', danger: true });
    if (!ok) return;
    const done = () => { this.toast.success('Product deleted.'); this.load(); };
    if (i.productId) this.inv.deleteProduct(i.productId).subscribe({ next: done });
    else this.inv.deleteIngredient(i.id).subscribe({ next: done });
  }
}
