import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormSubmitSuccessComponent } from './form-submit-success.component';

describe('FormSubmitSuccessComponent', () => {
  let component: FormSubmitSuccessComponent;
  let fixture: ComponentFixture<FormSubmitSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [FormSubmitSuccessComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormSubmitSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
