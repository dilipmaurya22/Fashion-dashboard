import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { SettingsService } from '../../core/services/domain.services';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { IconComponent } from '../../shared/icon/icon.component';
import { LoadingComponent, SpinnerComponent } from '../../shared/ui/misc';

@Component({
  selector: 'app-settings',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, IconComponent, LoadingComponent, SpinnerComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.scss',
})
export class SettingsComponent {
  private svc = inject(SettingsService);
  private toast = inject(ToastService);
  private fb = inject(FormBuilder);
  auth = inject(AuthService);

  loading = signal(true);
  saving = signal(false);
  isAdmin = this.auth.hasRole('Admin');

  form = this.fb.nonNullable.group({
    businessName: ['', Validators.required],
    address: [''],
    mobileNumber: ['', Validators.pattern(/^\d{10}$/)],
    gstNumber: ['', Validators.pattern(/^[0-9A-Za-z]{15}$/)],
    fssaiNumber: [''],
    receiptFooter: [''], currencySymbol: ['₹', Validators.required],
    defaultTaxPercent: [0, [Validators.min(0), Validators.max(100)]],
    defaultOrderType: ['Takeaway'],
    lowStockThreshold: [0, Validators.min(0)],
    deductionTrigger: ['OnCompleted'],
    allowNegativeStock: [false],
    logoUrl: [''],
  });

  onMobileInput(e: Event) {
    const el = e.target as HTMLInputElement;
    const digits = el.value.replace(/\D/g, '').slice(0, 10);
    el.value = digits; this.form.controls.mobileNumber.setValue(digits);
  }
  onGstInput(e: Event) {
    const el = e.target as HTMLInputElement;
    const v = el.value.toUpperCase().replace(/[^0-9A-Z]/g, '').slice(0, 15);
    el.value = v; this.form.controls.gstNumber.setValue(v);
  }

  constructor() {
    this.svc.get().subscribe({
      next: s => { this.form.patchValue(s); this.loading.set(false); if (!this.isAdmin) this.form.disable(); },
      error: () => this.loading.set(false),
    });
  }

  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); this.toast.error('Please fix the highlighted fields.'); return; }
    this.saving.set(true);
    this.svc.update(this.form.getRawValue() as any).subscribe({
      next: () => { this.saving.set(false); this.toast.success('Settings saved.'); },
      error: () => this.saving.set(false),
    });
  }
}
