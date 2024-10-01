import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ScratcherComponent } from './scratcher/scratcher.component';
import { GymComponent } from './gym/gym.component';
import { ProductsRoutingModule } from './products-routing.module';
import { CardModule } from 'src/app/components/card/card.module';
import { AccessoriesComponent } from './accessories/accessories.component';

@NgModule({
  declarations: [ScratcherComponent, GymComponent, AccessoriesComponent],
  imports: [CommonModule, ProductsRoutingModule, CardModule],
})
export class ProductsModule {}
