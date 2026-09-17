import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-paginator',
  standalone: true,
  imports: [CommonModule, IconComponent],
  template: `
    @if (totalPages > 1 || alwaysShow) {
      <div class="pager">
        <span class="text-secondary text-small">
          {{ (page - 1) * pageSize + 1 }}–{{ min(page * pageSize, totalCount) }} of {{ totalCount }}
        </span>
        <div class="controls">
          <button class="pg" [disabled]="page <= 1" (click)="go(page - 1)"><app-icon name="chevronDown" [size]="16" style="transform:rotate(90deg)"></app-icon></button>
          <span class="cur">{{ page }} / {{ totalPages }}</span>
          <button class="pg" [disabled]="page >= totalPages" (click)="go(page + 1)"><app-icon name="chevronDown" [size]="16" style="transform:rotate(-90deg)"></app-icon></button>
        </div>
      </div>
    }`,
  styles: [`
    .pager { display: flex; align-items: center; justify-content: space-between; padding: 14px 16px; border-top: 1px solid var(--border); }
    .controls { display: flex; align-items: center; gap: 8px; }
    .pg { width: 32px; height: 32px; border-radius: 8px; border: 1px solid var(--border); background: var(--card); color: var(--text);
      display: flex; align-items: center; justify-content: center; }
    .pg:disabled { opacity: .4; }
    .cur { font-size: 13px; font-weight: 600; min-width: 56px; text-align: center; }
  `],
})
export class PaginatorComponent {
  @Input() page = 1;
  @Input() pageSize = 20;
  @Input() totalCount = 0;
  @Input() totalPages = 1;
  @Input() alwaysShow = false;   // render the footer even when there's only one page
  @Output() pageChange = new EventEmitter<number>();
  go(p: number) { this.pageChange.emit(p); }
  min(a: number, b: number) { return Math.min(a, b); }
}
