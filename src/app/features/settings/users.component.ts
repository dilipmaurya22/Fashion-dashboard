import { Component, computed, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { forkJoin } from 'rxjs';
import { SettingsService } from '../../core/services/domain.services';
import { ToastService } from '../../core/services/toast.service';
import { ConfirmService } from '../../shared/ui/confirm';
import { User, RolePerms } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { LoadingComponent, EmptyStateComponent, SpinnerComponent } from '../../shared/ui/misc';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, RouterLink, IconComponent, LoadingComponent, EmptyStateComponent, SpinnerComponent],
  templateUrl: './users.component.html',
})
export class UsersComponent {
  private svc = inject(SettingsService);
  private toast = inject(ToastService);
  private confirm = inject(ConfirmService);
  private fb = inject(FormBuilder);

  loading = signal(true);
  users = signal<User[]>([]);
  roles = signal<string[]>([]);
  rolePerms = signal<RolePerms[]>([]);
  selectedRole = signal('Cashier');
  modalOpen = signal(false);
  editId = signal<number | null>(null);
  saving = signal(false);

  /** Access (permissions) the currently-selected role grants, grouped by module for the modal. */
  roleAccess = computed(() => {
    const found = this.rolePerms().find(r => r.role === this.selectedRole());
    const groups = new Map<string, string[]>();
    for (const p of found?.permissions ?? []) {
      const list = groups.get(p.module) ?? [];
      list.push(p.description);
      groups.set(p.module, list);
    }
    return [...groups.entries()].map(([module, items]) => ({ module, items }));
  });

  form = this.fb.nonNullable.group({
    fullName: ['', Validators.required],
    email: ['', [Validators.required, Validators.email]],
    username: ['', [Validators.required, Validators.minLength(3)]],
    password: ['', [Validators.required, Validators.minLength(6)]],
    role: ['Cashier', Validators.required],
    isActive: [true],
  });

  constructor() {
    this.load();
    // keep the access preview in sync with the Role dropdown
    this.form.controls.role.valueChanges.subscribe(r => this.selectedRole.set(r || 'Cashier'));
  }
  load() {
    this.loading.set(true);
    forkJoin({ u: this.svc.users(), r: this.svc.roles(), rp: this.svc.rolePermissions() }).subscribe({
      next: ({ u, r, rp }) => { this.users.set(u); this.roles.set(r); this.rolePerms.set(rp); this.loading.set(false); },
      error: () => this.loading.set(false),
    });
  }

  add() {
    this.editId.set(null);
    this.form.reset({ fullName: '', email: '', username: '', password: '', role: 'Cashier', isActive: true });
    this.form.controls.password.enable(); this.form.controls.username.enable();
    this.selectedRole.set('Cashier');
    this.modalOpen.set(true);
  }
  edit(u: User) {
    this.editId.set(u.id);
    this.form.reset({ fullName: u.fullName, email: u.email, username: u.username, password: 'unchanged', role: u.role, isActive: u.isActive });
    this.form.controls.password.disable(); this.form.controls.username.disable();
    this.selectedRole.set(u.role);
    this.modalOpen.set(true);
  }
  save() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.saving.set(true);
    const v = this.form.getRawValue();
    const req = this.editId()
      ? this.svc.saveUser(this.editId(), { fullName: v.fullName, email: v.email, role: v.role, isActive: v.isActive })
      : this.svc.saveUser(null, { fullName: v.fullName, email: v.email, username: v.username, password: v.password, role: v.role });
    req.subscribe({
      next: () => { this.saving.set(false); this.modalOpen.set(false); this.toast.success('User saved.'); this.load(); },
      error: () => this.saving.set(false),
    });
  }
  async remove(u: User) {
    const ok = await this.confirm.ask({ title: 'Delete user?', message: `“${u.fullName}” will lose access.`, confirmText: 'Delete', danger: true });
    if (!ok) return;
    this.svc.deleteUser(u.id).subscribe({ next: () => { this.toast.success('User deleted.'); this.load(); } });
  }
  roleClass(r: string) { return r === 'Admin' ? 'badge-danger' : r === 'Manager' ? 'badge-warning' : 'badge-info'; }
}
