import { Component, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';
import { BookService } from 'src/app/services/book.service';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
})
export class BooksListComponent implements OnInit {
  books: Book[] = [];

  loadingBooks = true;

  constructor(private bookService: BookService) {}

  ngOnInit(): void {
    this.loadingBooks = true;

    this.bookService.getBooks().subscribe(
      (resp) => {
        this.books = resp.items;
        this.loadingBooks = false;
      },
      (err) => console.log(err)
    );
  }
}
