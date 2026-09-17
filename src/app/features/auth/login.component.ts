import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../core/services/auth.service';
import { ToastService } from '../../core/services/toast.service';
import { IconComponent } from '../../shared/icon/icon.component';
import { SpinnerComponent } from '../../shared/ui/misc';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent, SpinnerComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  private fb = inject(FormBuilder);
  private auth = inject(AuthService);
  private router = inject(Router);
  private toast = inject(ToastService);

  loading = signal(false);
  error = signal<string | null>(null);
  showPassword = signal(false);
  chefOk = signal(true);   // falls back to the emoji visual if the image is missing

  form = this.fb.nonNullable.group({
    usernameOrEmail: ['', Validators.required],
    password: ['', Validators.required],
    rememberMe: [true],
  });

  forgot() { this.toast.info('Please contact your administrator to reset your password.'); }
  signup() { this.toast.info('Accounts are created by an Admin under Users & Roles.'); }

  submit() {
    if (this.form.invalid) { this.form.markAllAsTouched(); return; }
    this.loading.set(true);
    this.error.set(null);
    const { usernameOrEmail, password, rememberMe } = this.form.getRawValue();
    this.auth.login(usernameOrEmail, password, rememberMe).subscribe({
      next: () => { this.toast.success('Welcome back!'); this.router.navigate(['/dashboard']); },
      error: (e) => {
        this.loading.set(false);
        this.error.set(e.error?.message || 'Invalid credentials.');
      },
    });
  }
}
