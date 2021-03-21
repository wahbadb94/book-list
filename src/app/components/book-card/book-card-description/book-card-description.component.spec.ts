import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookCardDescriptionComponent } from './book-card-description.component';

describe('BookCardDescriptionComponent', () => {
  let component: BookCardDescriptionComponent;
  let fixture: ComponentFixture<BookCardDescriptionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [BookCardDescriptionComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookCardDescriptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
