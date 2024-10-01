import { Component } from '@angular/core';

@Component({
  selector: 'app-toy',
  templateUrl: './toy.component.html',
  styleUrls: ['./toy.component.scss'],
})
export class ToyComponent {
  public toyItems = [
    {
      title: 'Juguete Palta',
      icon: 'redeem',
      description:
        'Juguete Bola Catnip Para Gatos Palta Pared Hierba Gatera. Catnip para tu gato: un juguete con el que jugará por horas, incluye adhesivo para fijarlo en superficies.',
      sizes: '5 cm de largo, 6cm de altura, 4 cm de ancho',
      price: 25,
      image: {
        src: '../assets/products/toy-1.webp',
        alt: 'Juguete',
      },
      customClass: 'p-0',
      imageContain: true,
    },
    {
      title: 'Juguete Pelota',
      icon: 'redeem',
      description:
        'Pelota de juguete inteligente para gatos, rodante que rebota en movimiento automático',
      sizes: '4 cm',
      price: 10,
      image: {
        src: '../assets/products/toy-2.webp',
        alt: 'Juguete',
      },
      customClass: 'p-0',
      imageContain: true,
    },
    {
      title: 'Juguete Tunel',
      icon: 'redeem',
      description:
        'Túnel plegable para gatos que proporciona horas de entretenimiento y ejercicio, siendo un espacio ideal para felinos activos.',
      sizes: '84 cm de largo, 25cm de alto',
      price: 50,
      image: {
        src: '../assets/products/toy-3.webp',
        alt: 'Juguete',
      },
      customClass: 'p-0',
      imageContain: true,
    },
  ];
}
