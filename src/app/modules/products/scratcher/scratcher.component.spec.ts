import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScratcherComponent } from './scratcher.component';

describe('ScratcherComponent', () => {
  let component: ScratcherComponent;
  let fixture: ComponentFixture<ScratcherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScratcherComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScratcherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
