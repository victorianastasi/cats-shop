import { Component } from '@angular/core';

@Component({
  selector: 'app-level-two',
  templateUrl: './level-two.component.html',
  styleUrls: ['./level-two.component.scss'],
})
export class LevelTwoComponent {
  constructor() {}

  public levelTwoGyms = [
    {
      title: 'Modelo Grecia',
      icon: 'redeem',
      description:
        'Gimnasio para gatos de 2 niveles, fabricado en madera MDF con felpa beige. Incluye postes rascadores de sisal y dos plataformas perfectas para saltar y descansar. Su diseño compacto es ideal para cualquier rincón del hogar.',
      sizes: '60 cm de alto, 40 cm de ancho y 35 cm de profundidad',
      price: '100',
      image: {
        src: '/assets/products/gym-1.webp',
        alt: 'rascador horizontal',
      },
      classColor: 'blue',
      customClass: 'p-0',
      imageContain: true,
    },
    {
      title: 'Modelo Italia',
      icon: 'redeem',
      description:
        'Fabricado en MDF, tiene plataformas cubiertas de felpa gris y postes de sisal resistentes. Perfecto para afilar las uñas y descansar, es una opción duradera y compacta para cualquier espacio.',
      sizes: '65 cm de alto, con base de 45x40 cm',
      price: '120',
      image: {
        src: '/assets/products/gym-2.webp',
        alt: 'rascador horizontal',
      },
      classColor: 'blue',
      customClass: 'p-0',
      imageContain: true,
    },
  ];
}
