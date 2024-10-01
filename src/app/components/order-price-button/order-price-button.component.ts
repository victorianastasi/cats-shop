import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-order-price-button',
  templateUrl: './order-price-button.component.html',
  styleUrls: ['./order-price-button.component.scss'],
  standalone: true,
  imports: [CommonModule],
})
export class OrderPriceButtonComponent {
  @Input() public conditional: boolean = false;
  @Input() public action!: () => void;

  onButtonClick() {
    if (this.action) {
      this.action();
    }
  }
}
