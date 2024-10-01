import { Component } from '@angular/core';
import { NAVIGATION_PRODUCTS } from 'src/app/constants/components.constants';
import { Router } from '@angular/router';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss'],
})
export class ProductsComponent {
  highlighted: boolean = false;

  constructor(private router: Router) {}

  public processTitle(title: string): string {
    const accentMap: { [key: string]: string } = {
      á: 'a',
      é: 'e',
      í: 'i',
      ó: 'o',
      ú: 'u',
    };

    const titleWithoutAccents = title.replace(
      /[áéíóú]/g,
      (match) => accentMap[match] || match
    );

    return titleWithoutAccents.toLowerCase().replace(/\s/g, '-');
  }

  public navigationItems = NAVIGATION_PRODUCTS;

  isRouteActive(route: string): boolean {
    return this.router.url === route;
  }
}
