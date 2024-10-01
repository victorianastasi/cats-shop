import { Component } from '@angular/core';

@Component({
  selector: 'app-box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
})
export class BoxComponent {
  public boxItems = [
    {
      title: 'Bandeja Trebol',
      icon: 'redeem',
      description: 'Bandeja sanitaria para gatos mediana fabricada en plástico',
      sizes: 'Largo:40 cm, Ancho:30 cm, Alto:11 cm',
      price: 30,
      image: {
        src: 'assets/products/box-1.jpg',
        alt: 'bandejas',
      },
      customClass: 'p-0',
      imageContain: true,
    },
    {
      title: 'Bandeja Pino',
      icon: 'redeem',
      description: 'Bandeja sanitaria para gatos grande fabricada en plástico',
      sizes: 'Largo:50 cm, Ancho:35 cm, Alto:15 cm',
      price: 37,
      image: {
        src: 'assets/products/box-2.jpg',
        alt: 'bandejas',
      },
      customClass: 'p-0',
      imageContain: true,
    },
  ];
}
