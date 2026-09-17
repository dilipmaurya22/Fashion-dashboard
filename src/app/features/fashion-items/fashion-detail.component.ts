import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FashionItem } from '../../core/models/models';
import { IconComponent } from '../../shared/icon/icon.component';
import { MoneyPipe } from '../../shared/pipes/money.pipe';

/** Read-only details view of a fashion item (image on top, details below). */
@Component({
  selector: 'app-fashion-detail',
  standalone: true,
  imports: [CommonModule, IconComponent, MoneyPipe],
  templateUrl: './fashion-detail.component.html',
  styleUrl: './fashion-detail.component.scss',
})
export class FashionDetailComponent {
  @Input({ required: true }) fashion!: FashionItem;
  @Output() closed = new EventEmitter<void>();

  imgError = false;
  get showImage(): boolean { return !!this.fashion.imageUrl && !this.imgError; }

  fashionEmoji(): string {
    const n = this.fashion.name.toLowerCase();
    const map: [string, string][] = [
      ['jean', '👖'], ['trouser', '👖'], ['pant', '👖'], ['short', '🩳'], ['legging', '👖'],
      ['dress', '👗'], ['kurti', '👗'], ['gown', '👗'], ['saree', '🥻'], ['skirt', '👗'], ['top', '👚'], ['blouse', '👚'],
      ['jacket', '🧥'], ['hoodie', '🧥'], ['coat', '🧥'], ['sweat', '🧥'],
      ['shirt', '👕'], ['tee', '👕'], ['t-shirt', '👕'], ['polo', '👕'],
      ['shoe', '👟'], ['sneaker', '👟'], ['sandal', '🩴'], ['boot', '🥾'],
      ['cap', '🧢'], ['hat', '🎩'], ['bag', '👜'], ['wallet', '👛'], ['watch', '⌚'],
      ['sunglass', '🕶️'], ['glass', '🕶️'], ['belt', '🎗️'], ['sock', '🧦'], ['scarf', '🧣'], ['jewel', '💍'], ['ring', '💍'],
    ];
    for (const [k, e] of map) if (n.includes(k)) return e;
    return '👕';
  }
}
