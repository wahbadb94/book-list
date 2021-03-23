import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookCardDescriptionComponent } from './components/book-card/book-card-description/book-card-description.component';
import { BookReviewFormComponent } from './components/book-review-form/book-review-form.component';

@NgModule({
  declarations: [
    BookReviewFormComponent,
    BookCardDescriptionComponent,
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    BooksListComponent,
    BookCardComponent,
  ],
  imports: [BrowserModule, HttpClientModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
