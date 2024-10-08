import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelThreeComponent } from './level-three.component';

describe('LevelThreeComponent', () => {
  let component: LevelThreeComponent;
  let fixture: ComponentFixture<LevelThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelThreeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
