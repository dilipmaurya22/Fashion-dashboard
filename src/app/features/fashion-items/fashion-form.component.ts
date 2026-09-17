import { Component, EventEmitter, Input, OnInit, Output, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AbstractControl, FormArray, FormBuilder, ReactiveFormsModule, ValidationErrors, Validators } from '@angular/forms';

/** MRP must be >= selling price and >= purchase price (when MRP is set). */
function mrpCapValidator(group: AbstractControl): ValidationErrors | null {
  const mrp = +group.get('mrp')?.value || 0;
  const sell = +group.get('sellingPrice')?.value || 0;
  const cost = +group.get('costPrice')?.value || 0;
  if (mrp <= 0) return null;
  const errs: ValidationErrors = {};
  if (sell > mrp) errs['sellingOverMrp'] = true;
  if (cost > mrp) errs['costOverMrp'] = true;
  return Object.keys(errs).length ? errs : null;
}

/** Variant selling and purchase prices must not exceed variant MRP. */
function variantMrpValidator(group: AbstractControl): ValidationErrors | null {
  const mrp = +group.get('mrp')?.value || 0;
  const price = +group.get('price')?.value || 0;
  const purchase = +group.get('purchase')?.value || 0;
  if (mrp <= 0) return null;
  const errs: ValidationErrors = {};
  if (price > mrp) errs['sellingOverMrp'] = true;
  if (purchase > mrp) errs['purchaseOverMrp'] = true;
  return Object.keys(errs).length ? errs : null;
}
import { CatalogService } from '../../core/services/domain.services';
import { ToastService } from '../../core/services/toast.service';
import { Category, SubCategory } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { SpinnerComponent } from '../../shared/ui/misc';

@Component({
  selector: 'app-fashion-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent, SpinnerComponent],
  templateUrl: './fashion-form.component.html',
  styleUrl: './fashion-form.component.scss',
})
export class FashionFormComponent implements OnInit {
  @Input() fashionId: number | null = null;
  @Input() viewMode = false;   // read-only: show details, no editing
  @Output() saved = new EventEmitter<void>();
  @Output() cancelled = new EventEmitter<void>();

  private fb = inject(FormBuilder);
  private catalog = inject(CatalogService);
  private toast = inject(ToastService);

  loading = signal(true);
  saving = signal(false);
  categories = signal<Category[]>([]);
  subCategories = signal<SubCategory[]>([]);
  loadingSubs = signal(false);

  // Standard GST slabs for apparel/retail
  taxRates = [0, 5, 12, 18, 28];

  // Current stock is only editable while adding a product; on edit it's read-only (adjust via Stock In).
  get isEdit(): boolean { return this.fashionId != null; }

  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    sku: ['', Validators.required],
    categoryId: [null as number | null, Validators.required],
    subCategoryId: [null as string | null, Validators.required],
    brandName: [''],
    hsnCode: [''],
    description: [''],
    imageUrl: [''],
    mrp: [0, Validators.min(0)],
    costPrice: [0, Validators.min(0)],   // Purchase Price
    sellingPrice: [0, [Validators.required, Validators.min(0.01)]],
    stock: [0, Validators.min(0)],       // opening / current stock (used when no variants)
    minStock: [5, Validators.min(0)],
    taxPercent: [5, [Validators.min(0), Validators.max(100)]],
    isVeg: [true],
    isAvailable: [true],
    variants: this.fb.array([] as any[]),
  }, { validators: mrpCapValidator });

  get variants(): FormArray { return this.form.get('variants') as FormArray; }

  addVariantRow(v: { id?: string; color?: string; size?: string; mrp?: number; purchase?: number; price?: number; stock?: number } = {}) {
    // A brand-new blank row copies the product-level base prices; loaded variants keep their own.
    const base = this.form.getRawValue();
    const grp = this.fb.nonNullable.group({
      id: [v.id ?? ''],
      color: [v.color ?? '', Validators.required],
      size: [v.size ?? ''],
      mrp: [v.mrp ?? (+base.mrp || 0), Validators.min(0)],
      purchase: [v.purchase ?? (+base.costPrice || 0), Validators.min(0)],
      price: [v.price ?? (+base.sellingPrice || 0), [Validators.required, Validators.min(0)]],
      stock: [v.stock ?? 0, Validators.min(0)],
    }, { validators: variantMrpValidator });
    this.variants.push(grp);
    if (this.isEdit) grp.get('stock')!.disable();   // stock fixed on edit
    this.syncMainStock();
  }
  removeVariantRow(i: number) { this.variants.removeAt(i); this.syncMainStock(); }

  /** Product-level stock is disabled while editing, or when per-variant stock takes over. */
  private syncMainStock() {
    const c = this.form.get('stock')!;
    if (this.isEdit || this.variants.length > 0) c.disable({ emitEvent: false });
    else c.enable({ emitEvent: false });
  }

  ngOnInit() {
    this.catalog.categories().subscribe(cats => {
      this.categories.set(cats);
      if (this.fashionId) {
        this.catalog.fashionItem(this.fashionId).subscribe(f => {
          this.form.patchValue({
            name: f.name, sku: f.sku, categoryId: f.categoryId, brandName: f.brandName ?? '', hsnCode: f.hsnCode ?? '',
            description: f.description ?? '', imageUrl: f.imageUrl ?? '', mrp: f.mrp ?? 0, costPrice: f.costPrice,
            sellingPrice: f.sellingPrice, stock: f.stock ?? 0, minStock: f.minStock ?? 5,
            taxPercent: f.taxPercent, isVeg: f.isVeg, isAvailable: f.isAvailable,
          });
          // load this product's sub-categories, then select the saved one
          if (f.categoryId != null) this.loadSubCategories(String(f.categoryId), f.subCategoryId ?? null);
          f.variants.forEach(v => this.addVariantRow({ id: (v as any).id, color: v.color, size: v.size, mrp: v.mrp, purchase: v.purchase, price: v.price, stock: v.stock }));
          this.syncMainStock();                       // stock not editable on edit — only min stock
          if (this.viewMode) this.form.disable();    // read-only view
          this.loading.set(false);
        });
      } else { this.loading.set(false); }
    });
  }

  /** When the category changes, refresh the sub-category list and clear the current pick. */
  onCategoryChange() {
    const cat = this.form.getRawValue().categoryId;
    this.form.patchValue({ subCategoryId: null });
    if (cat != null) this.loadSubCategories(String(cat), null);
    else this.subCategories.set([]);
  }
  private loadSubCategories(categoryId: string, select: string | null) {
    this.loadingSubs.set(true);
    this.catalog.subCategories(categoryId).subscribe({
      next: subs => { this.subCategories.set(subs.filter(s => s.isActive)); if (select) this.form.patchValue({ subCategoryId: select }); this.loadingSubs.set(false); },
      error: () => { this.subCategories.set([]); this.loadingSubs.set(false); },
    });
  }

  // live profit preview — cost = purchase price, profit vs selling price
  totalCost(): number {
    return +this.form.getRawValue().costPrice || 0;
  }
  margin(): number {
    const price = +this.form.getRawValue().sellingPrice || 0;
    if (!price) return 0;
    return Math.round(((price - this.totalCost()) / price) * 100);
  }

  // ---- image attachment (resized + compressed, stored as data URI) ----
  onFile(ev: Event) {
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { this.toast.error('Please choose an image file.'); return; }
    if (file.size > 8 * 1024 * 1024) { this.toast.error('Image is too large (max 8MB).'); return; }
    // PNG / WEBP can be transparent — keep their alpha; JPEG source gets flattened onto white.
    const preserveAlpha = file.type === 'image/png' || file.type === 'image/webp';
    const reader = new FileReader();
    reader.onload = () => this.resizeAndSet(reader.result as string, preserveAlpha);
    reader.readAsDataURL(file);
    input.value = '';
  }

  private resizeAndSet(dataUrl: string, preserveAlpha: boolean) {
    const img = new Image();
    img.onload = () => {
      const max = 420;
      let { width, height } = img;
      if (width > height && width > max) { height = Math.round(height * max / width); width = max; }
      else if (height >= width && height > max) { width = Math.round(width * max / height); height = max; }
      const canvas = document.createElement('canvas');
      canvas.width = width; canvas.height = height;
      const ctx = canvas.getContext('2d')!;
      if (!preserveAlpha) { ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, width, height); } // avoid black bg on JPEG
      ctx.drawImage(img, 0, 0, width, height);
      const out = preserveAlpha ? canvas.toDataURL('image/png') : canvas.toDataURL('image/jpeg', 0.82);
      this.form.patchValue({ imageUrl: out });
    };
    img.src = dataUrl;
  }

  clearImage() { this.form.patchValue({ imageUrl: '' }); }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); this.toast.error('Please fix the form errors.'); return; }
    this.saving.set(true);
    const v = this.form.getRawValue();
    const body = {
      name: v.name, sku: v.sku, categoryId: v.categoryId, subCategoryId: v.subCategoryId, brandName: v.brandName, hsnCode: v.hsnCode,
      description: v.description, imageUrl: v.imageUrl,
      mrp: +v.mrp, costPrice: +v.costPrice, sellingPrice: +v.sellingPrice, stock: +v.stock, minStock: +v.minStock,
      taxPercent: +v.taxPercent, isVeg: v.isVeg, isAvailable: v.isAvailable,
      variants: v.variants.map((x: any) => ({
        id: x.id || null,
        color: x.color, size: x.size,
        name: [x.color, x.size].filter((s: string) => s && s.trim()).join(' / '),
        mrp: +x.mrp, purchasePrice: +x.purchase, sellingPrice: +x.price, price: +x.price, stock: +x.stock,
      })),
    };
    this.catalog.saveFashionItem(this.fashionId, body).subscribe({
      next: () => { this.saving.set(false); this.toast.success('Product saved.'); this.saved.emit(); },
      error: () => this.saving.set(false),
    });
  }
}
