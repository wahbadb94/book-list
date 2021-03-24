import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookDetailViewComponent } from './components/book-detail-view/book-detail-view.component';
import { BooksListComponent } from './components/books-list/books-list.component';

const routes: Routes = [
  { path: '', component: BooksListComponent },
  { path: 'books/:id', component: BookDetailViewComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
