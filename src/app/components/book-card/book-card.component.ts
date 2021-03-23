import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
})
export class BookCardComponent implements OnInit {
  @Input() book!: Book;

  constructor() {}

  ngOnInit(): void {
    // ensure book has been passed as input
    if (this.book === undefined || this.book === null) {
      throw new Error(
        `attribute "book" is required by ${this.constructor.name}`
      );
    }
  }
}
