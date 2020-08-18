import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GymNameComponent } from './gym-name.component';

describe('GymNameComponent', () => {
  let component: GymNameComponent;
  let fixture: ComponentFixture<GymNameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GymNameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GymNameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
