import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-vertical',
  templateUrl: './vertical.component.html',
  styleUrls: ['./vertical.component.scss'],
})
export class VerticalComponent implements OnInit {
  constructor() {}

  public verticalItems = [
    {
      title: 'Rascador Orange',
      icon: 'redeem',
      description:
        'Rascador vertical, fabricado en cartón reciclado. Perfecto para gatos que disfrutan rasgar y jugar. Diseño ligero y fácil de mover.',
      sizes: '70 cm de altura',
      price: 40,
      image: {
        src: '../assets/products/ras_ver_2.jpg',
        alt: 'rascador vertical',
      },
      classColor: 'blue',
      customClass: 'p-0',
      imageContain: true,
    },
    {
      title: 'Rascador Blue',
      icon: 'redeem',
      description:
        'Rascador de madera contrachapada y recubierto de cuerda de sisal. Proporciona un lugar acogedor para afilar uñas y descansar. Base sólida para estabilidad.',
      sizes: '80 cm de altura',
      price: 35,
      image: {
        src: '../assets/products/rascador_ver_2.webp',
        alt: 'rascador vertical',
      },
      classColor: 'blue',
      customClass: 'p-0',
      imageContain: true,
    },
    {
      title: 'Rascador Green',
      icon: 'redeem',
      description:
        'Poste rascador rodaja de arbol con cuerda de sisal. Ideal para gatos activos que necesitan trepar. Diseño moderno y duradero para cualquier hogar.',
      sizes: '75 cm de altura',
      price: 50,
      image: {
        src: '../assets/products/ras_ver_3.jpeg',
        alt: 'rascador vertical',
      },
      classColor: 'blue',
      customClass: 'p-0',
      imageContain: true,
    },
    {
      title: 'Rascador Pink',
      icon: 'redeem',
      description:
        'Rascador vertical confeccionado en yute natural. Perfecto para gatos que aman rasguñar. Su base ancha garantiza un soporte seguro y estable',
      sizes: '60 cm de altura',
      price: 25,
      image: {
        src: '../assets/products/rascador_ver_1.jpg',
        alt: 'rascador vertical',
      },
      classColor: 'blue',
      customClass: 'p-0',
      imageContain: true,
    },
  ];

  originalItems: any[] = [];
  isPriceAscActive: boolean = false;

  ngOnInit() {
    this.originalItems = [...this.verticalItems];
  }

  restoreOriginalOrder(): void {
    this.verticalItems = [...this.originalItems];
  }

  sortByPriceAsc(): void {
    this.isPriceAscActive = !this.isPriceAscActive;

    if (this.isPriceAscActive) {
      this.verticalItems.sort((a, b) => a.price - b.price);
    } else {
      this.restoreOriginalOrder();
    }
  }
}
