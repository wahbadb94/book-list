import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReviewRequest, ReviewResponse } from '../models/review';

@Injectable({
  providedIn: 'root',
})
export class ReviewService {
  constructor(private http: HttpClient) {}

  private readonly _baseUrl =
    'https://gdbooksapi.azurewebsites.net/api/reviews';

  private readonly _httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  createReview(reviewRequest: ReviewRequest) {
    console.log(reviewRequest);

    return this.http.post<ReviewResponse>(
      `${this._baseUrl}`,
      reviewRequest,
      this._httpOptions
    );
  }

  getReviewsByBookId(bookId: string) {
    return this.http.get<ReviewResponse[]>(
      `${this._baseUrl}/?bookId=${bookId}`,
      this._httpOptions
    );
  }
}
