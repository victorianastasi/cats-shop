import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LevelTwoComponent } from './level-two/level-two.component';
import { LevelThreeComponent } from './level-three/level-three.component';
import { GymRoutingModule } from './gym-routing.module';
import { CardModule } from 'src/app/components/card/card.module';

@NgModule({
  declarations: [LevelTwoComponent, LevelThreeComponent],
  imports: [CommonModule, GymRoutingModule, CardModule],
})
export class GymModule {}
