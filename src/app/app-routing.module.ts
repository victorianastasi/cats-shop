import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './modules/about/about.component';
import { HomeComponent } from './modules/home/home.component';
import { ProductsComponent } from './modules/products/products.component';
import { ContactComponent } from './modules/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'about',
    component: AboutComponent,
    loadChildren: () =>
      import('./modules/about/about.module').then((m) => m.AboutModule),
  },
  {
    path: 'products',
    component: ProductsComponent,
    loadChildren: () =>
      import('./modules/products/products.module').then(
        (m) => m.ProductsModule
      ),
  },
  {
    path: 'contact',
    component: ContactComponent,
    loadChildren: () =>
      import('./modules/contact/contact.module').then((m) => m.ContactModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
