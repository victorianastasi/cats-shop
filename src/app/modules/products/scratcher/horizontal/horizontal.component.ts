import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-horizontal',
  templateUrl: './horizontal.component.html',
  styleUrls: ['./horizontal.component.scss'],
})
export class HorizontalComponent implements OnInit {
  constructor() {}

  public horizontalItems = [
    {
      title: 'Rascador Lola',
      icon: 'redeem',
      description:
        'Rascador horizontal de cartón corrugado. Ideal para gatos de todas las edades, promueve el instinto natural de rascar. Ligero, ecológico y fácil de mover, con diseño reversible para mayor durabilidad.',
      sizes: '45x25 cm',
      price: 20,
      image: {
        src: 'assets/products/ras_hor_1.webp',
        alt: 'rascador horizontal',
      },
      classColor: 'blue',
      customClass: 'p-0',
      imageContain: true,
    },
    {
      title: 'Rascador Marcia',
      icon: 'redeem',
      description:
        'Rascador de madera y sisal. Su base antideslizante ofrece estabilidad, y el sisal natural es perfecto para el cuidado de las uñas. Diseño moderno que se adapta a cualquier espacio del hogar.',
      sizes: '50x30 cm',
      price: 30,
      image: {
        src: 'assets/products/rascador_hor_1.jpg',
        alt: 'rascador horizontal',
      },
      classColor: 'blue',
      customClass: 'p-0',
    },
    {
      title: 'Rascador Mora',
      icon: 'redeem',
      description:
        'Rascador horizontal en forma de rampa, fabricado con cartón reciclado. Es resistente y tiene una inclinación perfecta para el ejercicio diario del gato. Incluye hierba gatera para mayor atracción.',
      sizes: '40x20 cm',
      price: 15,
      image: {
        src: 'assets/products/ras_hor_3.webp',
        alt: 'rascador horizontal',
      },
      classColor: 'blue',
      customClass: 'p-0',
    },
    {
      title: 'Rascador Fresa',
      icon: 'redeem',
      description:
        'Rascador de cuerda de yute con base de felpa. Su textura rugosa es ideal para mantener las uñas afiladas. Fácil de transportar y perfecto para espacios pequeños. Diseño minimalista y funcional.',
      sizes: '60x25 cm',
      price: 40,
      image: {
        src: 'assets/products/ras_hor_4.jpg',
        alt: 'rascador horizontal',
      },
      classColor: 'blue',
      customClass: 'p-0',
      imageContain: true,
    },
  ];

  originalItems: any[] = [];
  isPriceAscActive: boolean = false;

  ngOnInit() {
    this.originalItems = [...this.horizontalItems];
  }

  restoreOriginalOrder(): void {
    this.horizontalItems = [...this.originalItems];
  }

  sortByPriceAsc(): void {
    this.isPriceAscActive = !this.isPriceAscActive;

    if (this.isPriceAscActive) {
      this.horizontalItems.sort((a, b) => a.price - b.price);
    } else {
      this.restoreOriginalOrder();
    }
  }
}
