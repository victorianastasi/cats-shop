import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderPriceButtonComponent } from './order-price-button.component';

describe('OrderPriceButtonComponent', () => {
  let component: OrderPriceButtonComponent;
  let fixture: ComponentFixture<OrderPriceButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OrderPriceButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OrderPriceButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
