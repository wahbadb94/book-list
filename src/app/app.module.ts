import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BooksListComponent } from './components/books-list/books-list.component';
import { BookCardComponent } from './components/book-card/book-card.component';
import { BookCardDescriptionComponent } from './components/book-card/book-card-description/book-card-description.component';
import { ReviewFormComponent } from './components/dummy-form/review-form.component';
import { AppRoutingModule } from './app-routing.module';
import { BookDetailViewComponent } from './components/book-detail-view/book-detail-view.component';
import { ReviewCardComponent } from './components/review-card/review-card.component';
import { FormSubmitSuccessComponent } from './components/dummy-form/form-submit-success/form-submit-success.component';

@NgModule({
  declarations: [
    BookCardDescriptionComponent,
    AppComponent,
    LayoutComponent,
    NavbarComponent,
    BooksListComponent,
    BookCardComponent,
    ReviewFormComponent,
    BookDetailViewComponent,
    ReviewCardComponent,
    FormSubmitSuccessComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
