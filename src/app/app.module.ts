import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SpinnerModule } from './components/spinner/spinner.module';
import { FooterElementComponent } from './components/footer-element/footer-element.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { SearchComponent } from './components/search/search.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AboutComponent } from './modules/about/about.component';
import { ProductsComponent } from './modules/products/products.component';
import { ContactComponent } from './modules/contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    AboutComponent,
    FooterElementComponent,
    ProductsComponent,
    ContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    BrowserAnimationsModule,
    MatIconModule,
    SpinnerModule,
    ReactiveFormsModule,
  ],
  exports: [MatIconModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
