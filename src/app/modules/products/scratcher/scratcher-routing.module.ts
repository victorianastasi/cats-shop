import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ScratcherComponent } from './scratcher.component';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';

const routes: Routes = [
  {
    path: 'scratcher',
    component: ScratcherComponent,
  },
  {
    path: 'horizontal',
    component: HorizontalComponent,
    loadChildren: () =>
      import('./horizontal/horizontal.module').then((m) => m.HorizontalModule),
  },
  {
    path: 'vertical',
    component: VerticalComponent,
    loadChildren: () =>
      import('./vertical/vertical.module').then((m) => m.VerticalModule),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ScratcherRoutingModule {}
