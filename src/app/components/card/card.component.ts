import { Component, Input } from '@angular/core';
import { IMediaImage } from '../core/models/image.models';
import { CommonModule } from '@angular/common';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, MatIconModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent {
  @Input() public title?: string;
  @Input() public description?: string;
  @Input() public price?: string | number;
  @Input() public sizes?: string;
  @Input() public icon?: string;
  @Input() public classColor?: string;
  @Input() public customClass?: string;
  @Input() public image?: IMediaImage;
  @Input() public imageContain?: boolean = false;
}
