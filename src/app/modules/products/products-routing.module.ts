import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsComponent } from './products.component';
import { ScratcherComponent } from './scratcher/scratcher.component';
import { GymComponent } from './gym/gym.component';
import { AccessoriesComponent } from './accessories/accessories.component';

const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
  },
  {
    path: 'scratcher',
    component: ScratcherComponent,
    loadChildren: () =>
      import('./scratcher/scratcher.module').then((m) => m.ScratcherModule),
  },
  {
    path: 'gym',
    component: GymComponent,
    loadChildren: () => import('./gym/gym.module').then((m) => m.GymModule),
  },
  {
    path: 'accessories',
    component: AccessoriesComponent,
    loadChildren: () =>
      import('./accessories/accessories.module').then(
        (m) => m.AccessoriesModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: 'products' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
