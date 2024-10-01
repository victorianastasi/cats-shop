import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GymComponent } from './gym.component';
import { LevelTwoComponent } from './level-two/level-two.component';
import { LevelThreeComponent } from './level-three/level-three.component';

const routes: Routes = [
  {
    path: 'gym',
    component: GymComponent,
  },
  {
    path: 'level-two',
    component: LevelTwoComponent,
    loadChildren: () =>
      import('./level-two/level-two.module').then((m) => m.LevelTwoModule),
  },
  {
    path: 'level-three',
    component: LevelThreeComponent,
    loadChildren: () =>
      import('./level-three/level-three.module').then(
        (m) => m.LevelThreeModule
      ),
  },
  { path: '**', pathMatch: 'full', redirectTo: '' },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GymRoutingModule {}
