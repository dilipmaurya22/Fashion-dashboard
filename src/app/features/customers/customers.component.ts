import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Subject, debounceTime, distinctUntilChanged } from 'rxjs';
import { CustomerService } from '../../core/services/domain.services';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { ConfirmService } from '../../shared/ui/confirm';
import { Customer, PagedResult } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';
import { LoadingComponent, EmptyStateComponent, SpinnerComponent } from '../../shared/ui/misc';
import { PaginatorComponent } from '../../shared/ui/paginator';

@Component({
  selector: 'app-customers',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule, RouterLink, IconComponent, MoneyPipe,
    LoadingComponent, EmptyStateComponent, SpinnerComponent, PaginatorComponent],
  templateUrl: './customers.component.html',
  styleUrl: './customers.component.scss',
})
export class CustomersComponent {
  private svc = inject(CustomerService);
  private toast = inject(ToastService);
  private confirm = inject(ConfirmService);
  private fb = inject(FormBuilder);
  auth = inject(AuthService);

  loading = signal(true);
  result = signal<PagedResult<Customer> | null>(null);
  page = signal(1);
  search = signal('');
  private searchSubject = new Subject<string>();

  modalOpen = signal(false);
  editId = signal<number | null>(null);
  saving = signal(false);
  form = this.fb.nonNullable.group({
    name: ['', Validators.required],
    mobileNumber: ['', Validators.pattern(/^\d{10}$/)],
    email: ['', Validators.email],
  });

  canManage = this.auth.hasRole('Admin', 'Manager');

  constructor() {
    this.searchSubject.pipe(debounceTime(300), distinctUntilChanged()).subscribe(v => { this.search.set(v); this.page.set(1); this.load(); });
    this.load();
  }
  load() {
    this.loading.set(true);
    this.svc.customers({ page: this.page(), pageSize: 15, search: this.search() })
      .subscribe({ next: r => { this.result.set(r); this.loading.set(false); }, error: () => this.loading.set(false) });
  }
  onMobileInput(e: Event) {
    const el = e.target as HTMLInputElement;
    const digits = el.value.replace(/\D/g, '').slice(0, 10);   // digits only, max 10
    el.value = digits;
    this.form.controls.mobileNumber.setValue(digits);
  }

  onSearch(v: string) { this.searchSubject.next(v); }
  goPage(p: number) { this.page.set(p); this.load(); }

  add() { this.editId.set(null); this.form.reset({ name: '', mobileNumber: '', email: '' }); this.modalOpen.set(true); }
  edit(c: Customer) { this.editId.set(c.id); this.form.reset({ name: c.name, mobileNumber: c.mobileNumber ?? '', email: c.email ?? '' }); this.modalOpen.set(true); }
  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    const v = this.form.getRawValue();
    this.svc.save(this.editId(), { name: v.name, mobileNumber: v.mobileNumber || null, email: v.email || null }).subscribe({
      next: () => { this.saving.set(false); this.modalOpen.set(false); this.toast.success('Customer saved.'); this.load(); },
      error: () => this.saving.set(false),
    });
  }
  async remove(c: Customer) {
    const ok = await this.confirm.ask({ title: 'Delete customer?', message: `“${c.name}” will be removed.`, confirmText: 'Delete', danger: true });
    if (!ok) return;
    this.svc.delete(c.id).subscribe({ next: () => { this.toast.success('Customer deleted.'); this.load(); } });
  }
}
