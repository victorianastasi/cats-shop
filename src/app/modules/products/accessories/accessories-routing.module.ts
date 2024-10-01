import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessoriesComponent } from './accessories.component';
import { FoodComponent } from './food/food.component';
import { WatererComponent } from './waterer/waterer.component';
import { BedComponent } from './bed/bed.component';
import { BoxComponent } from './box/box.component';
import { ToyComponent } from './toy/toy.component';

const routes: Routes = [
  {
    path: 'accessories',
    component: AccessoriesComponent,
  },
  {
    path: 'food',
    component: FoodComponent,
    loadChildren: () => import('./food/food.module').then((m) => m.FoodModule),
  },
  {
    path: 'waterer',
    component: WatererComponent,
    loadChildren: () =>
      import('./waterer/waterer.module').then((m) => m.WatererModule),
  },
  {
    path: 'bed',
    component: BedComponent,
    loadChildren: () => import('./bed/bed.module').then((m) => m.BedModule),
  },
  {
    path: 'box',
    component: BoxComponent,
    loadChildren: () => import('./box/box.module').then((m) => m.BoxModule),
  },
  {
    path: 'toy',
    component: ToyComponent,
    loadChildren: () => import('./toy/toy.module').then((m) => m.ToyModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AccessoriesRoutingModule {}
