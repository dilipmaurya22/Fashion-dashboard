import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from '../icon/icon.component';

/**
 * Premium branded "Spinning Plate / Ring" loader for the FashionCart dashboard.
 * Indeterminate (no progress bar). Reusable inline or as a full-screen splash.
 *
 *   <app-fashioncart-loader></app-fashioncart-loader>
 *   <app-fashioncart-loader fullscreen [label]="'Loading orders...'"></app-fashioncart-loader>
 */
@Component({
  selector: 'app-fashioncart-loader',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './fashioncart-loader.component.html',
  styleUrl: './fashioncart-loader.component.scss',
})
export class FashioncartLoaderComponent {
  /** Primary line under the loader. */
  @Input() label = 'Loading FashionCart...';
  /** Secondary line; pass '' to hide. */
  @Input() subLabel = 'Please wait...';
  /** When true, renders a centered full-screen overlay with the app background. */
  @Input() fullscreen = false;
}
