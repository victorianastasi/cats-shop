import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FoodComponent } from './food/food.component';
import { AccessoriesRoutingModule } from './accessories-routing.module';
import { CardModule } from 'src/app/components/card/card.module';
import { WatererComponent } from './waterer/waterer.component';
import { BedComponent } from './bed/bed.component';
import { BoxComponent } from './box/box.component';
import { ToyComponent } from './toy/toy.component';

@NgModule({
  declarations: [
    FoodComponent,
    WatererComponent,
    BedComponent,
    BoxComponent,
    ToyComponent,
  ],
  imports: [CommonModule, AccessoriesRoutingModule, CardModule],
})
export class AccessoriesModule {}
