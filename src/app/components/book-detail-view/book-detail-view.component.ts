import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'src/app/models/book';
import { ReviewResponse } from 'src/app/models/review';
import { BookService } from 'src/app/services/book.service';
import { ReviewService } from 'src/app/services/review.service';

@Component({
  selector: 'app-book-detail-view',
  templateUrl: './book-detail-view.component.html',
})
export class BookDetailViewComponent implements OnInit {
  book!: Book;
  reviews: ReviewResponse[] = [];

  loadingDetails = true;
  loadingReviews = true;

  constructor(
    private route: ActivatedRoute,
    private bookService: BookService,
    private reviewService: ReviewService
  ) {}

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    const bookId = this.route.snapshot.paramMap.get('id');

    // user router guard instead
    if (bookId === null) {
      throw new Error(`book with id ${bookId} does not exist`);
    }

    this.loadingDetails = true;
    this.loadingReviews = true;

    this.bookService.getBook(bookId).subscribe(
      (book) => {
        this.book = book;
        this.loadingDetails = false;
      },
      (err) => {
        console.log(err);
        this.loadingDetails = false;
      }
    );

    this.reviewService.getReviewsByBookId(bookId).subscribe(
      (reviews) => {
        this.reviews = reviews;
        console.log(reviews);
        this.loadingReviews = false;
      },
      (err) => {
        console.error(err);
        this.loadingReviews = false;
      }
    );
  }

  handleReviewCreatedEvent(reviewResponse: ReviewResponse) {
    this.reviews.push(reviewResponse);
  }
}
