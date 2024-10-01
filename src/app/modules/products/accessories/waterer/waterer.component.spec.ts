import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WatererComponent } from './waterer.component';

describe('WatererComponent', () => {
  let component: WatererComponent;
  let fixture: ComponentFixture<WatererComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WatererComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WatererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
