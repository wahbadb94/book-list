import { HttpClient } from '@angular/common/http';
import { Component, Input, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';

import { Book } from 'src/app/models/book';
import { ReviewRequest } from 'src/app/models/review';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-book-review-form',
  templateUrl: './book-review-form.component.html',
})
export class BookReviewFormComponent implements OnInit {
  @Input() book!: Book;

  // form state
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
    // ensure book has been passed as input
    if (this.book === undefined || this.book === null) {
      throw new Error(
        `attribute "book" is required by ${this.constructor.name}`
      );
    }

    this.myForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      reviewBody: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      rating: new FormControl(null, [
        Validators.required,
        Validators.min(1),
        Validators.max(5),
      ]),
      bookId: this.book.id,
    });
  }

  async handleSubmit() {
    console.log('submitting!');
    this.loading = true;
    const formValue = this.myForm.value;

    const reviewRequest: ReviewRequest = {
      bookId: this.book.id,
      name: formValue.name,
      rating: parseInt(formValue.rating),
      reviewBody: formValue.reviewBody,
    };

    try {
      await this.reviewService.createReview(reviewRequest).toPromise();
      this.success = true;
    } catch (error) {
      console.error(error);
    }

    this.loading = false;
    this.success && this.myForm.reset();
  }
}
