import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { CoverComponent } from 'src/app/components/cover/cover.component';
import { CardModule } from 'src/app/components/card/card.module';

@NgModule({
  declarations: [HomeComponent, CoverComponent],
  imports: [CommonModule, CardModule],
})
export class HomeModule {}
