import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSloatsComponent } from './list-sloats.component';

describe('ListSloatsComponent', () => {
  let component: ListSloatsComponent;
  let fixture: ComponentFixture<ListSloatsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListSloatsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListSloatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
