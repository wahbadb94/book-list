import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ReviewRequest, ReviewResponse } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-dummy-form',
  templateUrl: './dummy-form.component.html',
})
export class DummyFormComponent implements OnInit {
  @Input() bookId!: string;
  @Output() reviewCreatedEvent = new EventEmitter<ReviewResponse>();

  myForm!: FormGroup;
  loading = false;
  success = false;

  get name() {
    return this.myForm.get('name');
  }

  get rating() {
    return this.myForm.get('rating');
  }

  get reviewBody() {
    return this.myForm.get('reviewBody');
  }

  constructor(
    private formBuilder: FormBuilder,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.myForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      reviewBody: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      rating: new FormControl(0, [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]),
    });
  }

  async handleSubmit() {
    const formValue = this.myForm.value;

    const reviewRequest: ReviewRequest = {
      bookId: this.bookId,
      name: formValue.name,
      rating: parseInt(formValue.rating),
      reviewBody: formValue.reviewBody,
    };

    //
    try {
      this.loading = true;
      this.reviewService
        .createReview(reviewRequest)
        .toPromise()
        .then((reviewResponse) => {
          console.log(reviewResponse);
          this.loading = false;
          this.success = true;
          this.myForm.reset();
          this.reviewCreatedEvent.emit(reviewResponse);
        })
        .catch((err) => console.error(err));
    } catch (error) {
      console.error(error);
    }
  }
}
