import { Component } from '@angular/core';

@Component({
  selector: 'app-level-three',
  templateUrl: './level-three.component.html',
  styleUrls: ['./level-three.component.scss'],
})
export class LevelThreeComponent {
  constructor() {}

  public levelThreeGyms = [
    {
      title: 'Modelo España',
      icon: 'redeem',
      description:
        'Gimnasio para gatos de 3 niveles, hecho de madera contrachapada y recubierto de felpa suave . Incluye postes rascadores de yute natural y tres plataformas a diferentes alturas, perfectas para saltar y explorar. Su diseño compacto se adapta a cualquier espacio.',
      sizes: '85 cm de alto, 50 cm de ancho y 40 cm de profundidad',
      price: '120',
      image: {
        src: '../assets/products/gym-3niv.webp',
        alt: 'rascador horizontal',
      },
      classColor: 'blue',
      customClass: 'p-0',
      imageContain: true,
    },
    {
      title: 'Modelo Portugal',
      icon: 'redeem',
      description:
        'Fabricado en madera maciza con plataformas cubiertas de lona resistente. Los postes están recubiertos con cuerda de cáñamo, ideal para rascar y afilar las uñas. Ofrece un diseño duradero y elegante para cualquier hogar.',
      sizes: '90 cm de alto, con base de 50x45 cm.',
      price: '130',
      image: {
        src: '../assets/products/gym-2.webp',
        alt: 'rascador horizontal',
      },
      classColor: 'blue',
      customClass: 'p-0',
      imageContain: true,
    },
  ];
}
