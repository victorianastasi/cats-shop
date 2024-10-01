import { Component } from '@angular/core';

@Component({
  selector: 'app-bed',
  templateUrl: './bed.component.html',
  styleUrls: ['./bed.component.scss'],
})
export class BedComponent {
  public bedItems = [
    {
      title: 'Cama Gray',
      icon: 'redeem',
      description: 'Moises cama para gatos de material plush super suave',
      sizes: '50 cm de diámetro',
      price: 60,
      image: {
        src: 'assets/products/bed-1.webp',
        alt: 'camas',
      },
      customClass: 'p-0',
      imageContain: true,
    },
    {
      title: 'Cama Cream',
      icon: 'redeem',
      description:
        'Cama para gatos fabricada en felpa suave. Diseño acogedor y antideslizante, ideal para que tu gato se sienta seguro y cómodo mientras descansa.',
      sizes: '50 cm de diámetro',
      price: 50,
      image: {
        src: 'assets/products/bed-2.webp',
        alt: 'camas',
      },
      customClass: 'p-0',
      imageContain: true,
    },
    {
      title: 'Cama Ocean',
      icon: 'redeem',
      description:
        'Cama con espuma viscoelástica y funda lavable. Ofrece soporte adicional. Diseño elegante que complementa tu hogar.',
      sizes: '70 cm de diámetro',
      price: 70,
      image: {
        src: 'assets/products/bed-3.webp',
        alt: 'camas',
      },
      customClass: 'p-0',
      imageContain: true,
    },
  ];
}
