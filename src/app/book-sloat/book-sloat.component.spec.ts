import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookSloatComponent } from './book-sloat.component';

describe('BookSloatComponent', () => {
  let component: BookSloatComponent;
  let fixture: ComponentFixture<BookSloatComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookSloatComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookSloatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
