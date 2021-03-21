import { Component, Input, OnInit } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-card',
  templateUrl: './book-card.component.html',
})
export class BookCardComponent implements OnInit {
  @Input() book?: Book;

  mouseOver: boolean = false;

  constructor() {}

  ngOnInit(): void {}
}
