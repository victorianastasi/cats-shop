import { Component } from '@angular/core';

@Component({
  selector: 'app-food',
  templateUrl: './food.component.html',
  styleUrls: ['./food.component.scss'],
})
export class FoodComponent {
  public foodItems = [
    {
      title: 'Comedero Rose',
      icon: 'redeem',
      description:
        'Comedero elevado, fabricado en MDF melaminico. Promueve una postura cómoda al comer. Base antideslizante para mayor estabilidad durante la alimentación.',
      sizes: '29 cm de ancho, 20 de profundidad y 7 de altura',
      price: 20,
      image: {
        src: '../assets/products/food-1.webp',
        alt: 'comedero',
      },
      customClass: 'p-0',
      imageContain: true,
    },
    {
      title: 'Comedero Black',
      icon: 'redeem',
      description:
        'Comedero doble de acero inoxidable. Diseño elegante y fácil de limpiar. Ideal para mantener los alimentos frescos y evitar deslizamientos.',
      sizes: 'Largo x Ancho x Altura: 34.5 cm x 19 cm x 5 cm',
      price: 30,
      image: {
        src: '../assets/products/food-2.webp',
        alt: 'comedero',
      },
      customClass: 'p-0',
    },
  ];
}
