import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { CatalogService } from '../../core/services/domain.services';
import { ToastService } from '../../core/services/toast.service';
import { ConfirmService } from '../../shared/ui/confirm';
import { Category, SubCategory } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { LoadingComponent, EmptyStateComponent, SpinnerComponent } from '../../shared/ui/misc';

@Component({
  selector: 'app-categories',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent, LoadingComponent, EmptyStateComponent, SpinnerComponent],
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss',
})
export class CategoriesComponent {
  private catalog = inject(CatalogService);
  private toast = inject(ToastService);
  private confirm = inject(ConfirmService);
  private fb = inject(FormBuilder);

  loading = signal(true);
  items = signal<Category[]>([]);
  modalOpen = signal(false);
  editId = signal<number | null>(null);
  saving = signal(false);

  // tabs
  tab = signal<'categories' | 'subcategories'>('categories');
  setTab(t: 'categories' | 'subcategories') { this.tab.set(t); if (t === 'subcategories') this.loadSubs(); }

  // filters
  catSearch = signal('');
  subSearch = signal('');
  subCatFilter = signal<string>('');   // parent category id ('' = all)
  filteredCats = computed(() => {
    const q = this.catSearch().trim().toLowerCase();
    return this.items().filter(c => !q || c.name.toLowerCase().includes(q));
  });
  filteredSubs = computed(() => {
    const q = this.subSearch().trim().toLowerCase();
    const cat = this.subCatFilter();
    return this.subItems().filter(s =>
      (!cat || String(s.categoryId) === cat) && (!q || s.name.toLowerCase().includes(q)));
  });

  // sub-categories
  subItems = signal<SubCategory[]>([]);
  subLoading = signal(false);
  subModalOpen = signal(false);
  subEditId = signal<string | null>(null);
  subSaving = signal(false);
  subForm = this.fb.nonNullable.group({
    name: ['', Validators.required],
    categoryId: [null as string | null, Validators.required],
    isActive: [true],
  });

  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    icon: ['category'],
    imageUrl: [''],
    sortOrder: [0],
    isActive: [true],
  });

  constructor() { this.load(); }

  loadSubs() {
    this.subLoading.set(true);
    this.catalog.subCategories().subscribe({ next: s => { this.subItems.set(s); this.subLoading.set(false); }, error: () => this.subLoading.set(false) });
  }
  addSub() {
    this.subEditId.set(null);
    this.subForm.reset({ name: '', categoryId: this.items()[0] ? String(this.items()[0].id) : null, isActive: true });
    this.subModalOpen.set(true);
  }
  editSub(s: SubCategory) {
    this.subEditId.set(s.id);
    this.subForm.reset({ name: s.name, categoryId: String(s.categoryId), isActive: s.isActive });
    this.subModalOpen.set(true);
  }
  saveSub() {
    if (this.subForm.invalid) { this.subForm.markAllAsTouched(); return; }
    this.subSaving.set(true);
    this.catalog.saveSubCategory(this.subEditId(), this.subForm.getRawValue()).subscribe({
      next: () => { this.subSaving.set(false); this.subModalOpen.set(false); this.toast.success('Subcategory saved.'); this.loadSubs(); this.load(); },
      error: () => this.subSaving.set(false),
    });
  }
  async removeSub(s: SubCategory) {
    const ok = await this.confirm.ask({ title: 'Delete subcategory?', message: `“${s.name}” will be removed.`, confirmText: 'Delete', danger: true });
    if (!ok) return;
    this.catalog.deleteSubCategory(s.id).subscribe({ next: () => { this.toast.success('Subcategory deleted.'); this.loadSubs(); } });
  }

  load() {
    this.loading.set(true);
    this.catalog.categories().subscribe({ next: c => { this.items.set(c); this.loading.set(false); }, error: () => this.loading.set(false) });
  }

  add() { this.editId.set(null); this.form.reset({ name: '', icon: 'category', imageUrl: '', sortOrder: this.items().length + 1, isActive: true }); this.modalOpen.set(true); }
  edit(c: Category) { this.editId.set(c.id); this.form.reset({ name: c.name, icon: c.icon ?? 'category', imageUrl: c.imageUrl ?? '', sortOrder: c.sortOrder, isActive: c.isActive }); this.modalOpen.set(true); }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    this.catalog.saveCategory(this.editId(), this.form.getRawValue()).subscribe({
      next: () => { this.saving.set(false); this.modalOpen.set(false); this.toast.success('Category saved.'); this.load(); },
      error: () => this.saving.set(false),
    });
  }

  async remove(c: Category) {
    const ok = await this.confirm.ask({ title: 'Delete category?', message: `“${c.name}” will be removed.`, confirmText: 'Delete', danger: true });
    if (!ok) return;
    this.catalog.deleteCategory(c.id).subscribe({ next: () => { this.toast.success('Category deleted.'); this.load(); } });
  }

  // ---- image attachment (resized + compressed) ----
  onFile(ev: Event) {
    const input = ev.target as HTMLInputElement;
    const file = input.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) { this.toast.error('Please choose an image file.'); return; }
    if (file.size > 8 * 1024 * 1024) { this.toast.error('Image is too large (max 8MB).'); return; }
    const preserveAlpha = file.type === 'image/png' || file.type === 'image/webp';
    const reader = new FileReader();
    reader.onload = () => this.resizeAndSet(reader.result as string, preserveAlpha);
    reader.readAsDataURL(file);
    input.value = '';
  }
  private resizeAndSet(dataUrl: string, preserveAlpha: boolean) {
    const img = new Image();
    img.onload = () => {
      const max = 320;
      let { width, height } = img;
      if (width > height && width > max) { height = Math.round(height * max / width); width = max; }
      else if (height >= width && height > max) { width = Math.round(width * max / height); height = max; }
      const canvas = document.createElement('canvas');
      canvas.width = width; canvas.height = height;
      const ctx = canvas.getContext('2d')!;
      if (!preserveAlpha) { ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, width, height); }
      ctx.drawImage(img, 0, 0, width, height);
      this.form.patchValue({ imageUrl: preserveAlpha ? canvas.toDataURL('image/png') : canvas.toDataURL('image/jpeg', 0.82) });
    };
    img.src = dataUrl;
  }
  clearImage() { this.form.patchValue({ imageUrl: '' }); }

  // ---- card visuals ----
  private failedImages = signal<Set<number>>(new Set());
  onImgError(id: number) { this.failedImages.update(s => new Set(s).add(id)); }
  showImage(c: Category): boolean { return !!c.imageUrl && !this.failedImages().has(c.id); }
  catEmoji(name: string): string {
    const n = name.toLowerCase();
    const map: [string, string][] = [
      ['men', '👔'], ['women', '👗'], ['kid', '🧸'], ['boy', '🧒'], ['girl', '👧'],
      ['footwear', '👟'], ['shoe', '👟'], ['bag', '👜'], ['accessor', '👜'],
      ['jewel', '💍'], ['watch', '⌚'], ['ethnic', '🥻'], ['winter', '🧥'], ['inner', '🩲'],
    ];
    for (const [k, e] of map) if (n.includes(k)) return e;
    return '🛍️';
  }
  hue(c: Category): number { return c.id % 6; }
}
