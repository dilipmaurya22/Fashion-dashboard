import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-message',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="page-head"><div><h1 class="page-title">Messages</h1>
      <p class="text-secondary">Team and customer conversations</p></div></div>

    <div class="card">
      <div class="empty">
        <div class="ic"><app-icon name="bell" [size]="28"></app-icon></div>
        <h3>No messages</h3>
        <p class="text-secondary">Your inbox is empty. New messages will show up here.</p>
      </div>
    </div>`,
  styles: [`
    .empty { text-align: center; padding: 64px 24px; }
    .ic { width: 64px; height: 64px; border-radius: 16px; background: var(--orange-soft); color: var(--orange-dark);
      display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
    .empty h3 { font-size: 16px; margin-bottom: 6px; }
  `],
})
export class MessageComponent {}
