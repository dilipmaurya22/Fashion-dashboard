import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../../shared/icon/icon.component';

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    <div class="page-head"><div><h1 class="page-title">Reviews</h1>
      <p class="text-secondary">Customer feedback and ratings</p></div></div>

    <div class="grid-3 mb-24">
      <div class="card card-pad st"><span class="text-secondary text-small">Average Rating</span><b>—</b></div>
      <div class="card card-pad st"><span class="text-secondary text-small">Total Reviews</span><b>0</b></div>
      <div class="card card-pad st"><span class="text-secondary text-small">This Week</span><b>0</b></div>
    </div>

    <div class="card">
      <div class="empty">
        <div class="ic"><app-icon name="reports" [size]="28"></app-icon></div>
        <h3>No reviews yet</h3>
        <p class="text-secondary">Customer reviews will appear here once collection is enabled.</p>
      </div>
    </div>`,
  styles: [`
    .grid-3 { display: grid; grid-template-columns: repeat(3,1fr); gap: 16px; }
    .st { display: flex; flex-direction: column; gap: 6px; } .st b { font-size: 24px; font-weight: 800; }
    .empty { text-align: center; padding: 56px 24px; }
    .ic { width: 64px; height: 64px; border-radius: 16px; background: var(--hover); color: var(--text-secondary);
      display: flex; align-items: center; justify-content: center; margin: 0 auto 16px; }
    .empty h3 { font-size: 16px; margin-bottom: 6px; }
    @media (max-width: 720px){ .grid-3 { grid-template-columns: 1fr; } }
  `],
})
export class ReviewComponent {}
