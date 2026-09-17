import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastContainerComponent } from './shared/ui/toast-container';
import { ConfirmDialogComponent } from './shared/ui/confirm';
import { PrinterService } from './core/services/printer.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastContainerComponent, ConfirmDialogComponent],
  template: `
    <router-outlet></router-outlet>
    <app-toast-container></app-toast-container>
    <app-confirm-dialog></app-confirm-dialog>
  `,
})
export class AppComponent {
  // instantiate on startup so a previously-paired printer auto-reconnects app-wide
  private printer = inject(PrinterService);
}
