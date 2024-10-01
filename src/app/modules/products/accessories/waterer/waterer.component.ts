import { Component } from '@angular/core';

@Component({
  selector: 'app-waterer',
  templateUrl: './waterer.component.html',
  styleUrls: ['./waterer.component.scss'],
})
export class WatererComponent {
  public watererItems = [
    {
      title: 'Bebedero Flor',
      icon: 'redeem',
      description:
        'Fuente De Agua Recirculante de acero inoxidable. La fuente de agua para gatos proporciona agua fresca. La capacidad de agua es de 1.6 Litros, anima a su gato a beber más y mantenerse sano.',
      sizes: '29 cm de ancho, 20 de profundidad y 7 de altura',
      price: 50,
      image: {
        src: '/assets/products/waterer-1.webp',
        alt: 'bebedero',
      },
      customClass: 'p-0',
      imageContain: true,
    },
  ];
}
