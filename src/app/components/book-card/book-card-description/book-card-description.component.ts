import { Component, Input } from '@angular/core';
import { Book } from 'src/app/models/book';

@Component({
  selector: 'app-book-card-description',
  templateUrl: './book-card-description.component.html',
})
export class BookCardDescriptionComponent {
  @Input() book?: Book;
  constructor() {}
}
