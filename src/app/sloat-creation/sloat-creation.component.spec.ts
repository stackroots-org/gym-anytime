import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SloatCreationComponent } from './sloat-creation.component';

describe('SloatCreationComponent', () => {
  let component: SloatCreationComponent;
  let fixture: ComponentFixture<SloatCreationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SloatCreationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SloatCreationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
