import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { InventoryService } from '../../core/services/domain.services';
import { ToastService } from '../../core/services/toast.service';
import { Ingredient, Supplier } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { SpinnerComponent } from '../../shared/ui/misc';

@Component({
  selector: 'app-stock-in',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, IconComponent, MoneyPipe, SpinnerComponent],
  templateUrl: './stock-in.component.html',
  styleUrl: './stock-in.component.scss',
})
export class StockInComponent {
  private inv = inject(InventoryService);
  private toast = inject(ToastService);
  private fb = inject(FormBuilder);
  private router = inject(Router);

  ingredients = signal<Ingredient[]>([]);
  suppliers = signal<Supplier[]>([]);
  saving = signal(false);

  form = this.fb.nonNullable.group({
    supplierId: [null as number | null],
    invoiceNumber: [''],
    notes: [''],
    items: this.fb.array([] as any[]),
  });

  get items(): FormArray { return this.form.get('items') as FormArray; }

  constructor() {
    forkJoin({ ings: this.inv.allIngredients(), sups: this.inv.suppliers() }).subscribe(({ ings, sups }) => {
      this.ingredients.set(ings); this.suppliers.set(sups); this.addRow();
    });
  }

  addRow() {
    this.items.push(this.fb.nonNullable.group({
      ingredientId: [null, Validators.required],
      quantity: [1, [Validators.required, Validators.min(1)]],
      costPerUnit: [0, [Validators.required, Validators.min(0)]],
    }));
  }
  removeRow(i: number) { this.items.removeAt(i); }

  /** Quantity is whole units only — strip any decimal the user types. */
  sanitizeQty(i: number) {
    const c = this.items.at(i).get('quantity')!;
    const n = Math.floor(Math.abs(+c.value || 0));
    if (+c.value !== n) c.setValue(n, { emitEvent: false });
  }

  unitFor(id: any): string { return this.ingredients().find(x => String(x.id) === String(id))?.unit ?? ''; }
  lineTotal(i: number): number {
    const c = this.items.at(i).getRawValue() as any;
    return (+c.quantity || 0) * (+c.costPerUnit || 0);
  }
  grandTotal(): number { return this.items.controls.reduce((s, _, i) => s + this.lineTotal(i), 0); }

  onPickIngredient(i: number) {
    const id = this.items.at(i).get('ingredientId')!.value;
    const ing = this.ingredients().find(x => String(x.id) === String(id));
    // Always sync the cost to the chosen product's purchase price when the product changes.
    if (ing) this.items.at(i).patchValue({ costPerUnit: ing.costPerUnit });
  }

  submit() {
    if (this.form.invalid || !this.items.length) { this.form.markAllAsTouched(); this.toast.error('Add at least one valid item.'); return; }
    this.saving.set(true);
    const v = this.form.getRawValue();
    const body = {
      supplierId: v.supplierId, invoiceNumber: v.invoiceNumber, notes: v.notes, purchaseDate: null,
      items: v.items.map((r: any) => ({ ingredientId: r.ingredientId, quantity: Math.floor(+r.quantity) || 0, costPerUnit: +r.costPerUnit })),
    };
    this.inv.stockIn(body).subscribe({
      next: () => { this.saving.set(false); this.toast.success('Stock added to inventory.'); this.router.navigate(['/inventory']); },
      error: () => this.saving.set(false),
    });
  }
}
