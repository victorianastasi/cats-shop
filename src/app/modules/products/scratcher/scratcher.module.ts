import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HorizontalComponent } from './horizontal/horizontal.component';
import { VerticalComponent } from './vertical/vertical.component';
import { ScratcherRoutingModule } from './scratcher-routing.module';
import { CardModule } from 'src/app/components/card/card.module';
import { OrderPriceButtonComponent } from 'src/app/components/order-price-button/order-price-button.component';

@NgModule({
  declarations: [HorizontalComponent, VerticalComponent],
  imports: [
    CommonModule,
    ScratcherRoutingModule,
    CardModule,
    OrderPriceButtonComponent,
  ],
})
export class ScratcherModule {}
