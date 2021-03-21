import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../models/book';
import { GoogleBooksApiResponse } from '../models/googleBooksApiResponse';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private http: HttpClient) {}

  private readonly _baseUrl = 'https://www.googleapis.com/books/v1/volumes';
  private readonly _searchKeywords = 'national+parks';
  private readonly _resultsLimit = 40;
  private readonly _googleBooksApiKey =
    'AIzaSyCCFhNhFsfjlUPCGL6P36g7kOlp_b6HZkc';
  private readonly _googleCloudProjectId = 'leafy-loader-288300';
  private readonly _queryParamsGetAllLimited = `q=${this._searchKeywords}&maxResults=${this._resultsLimit}&key=${this._googleBooksApiKey}&project=${this._googleCloudProjectId}`;

  private readonly httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  getBooks() {
    return this.http.get<GoogleBooksApiResponse>(
      `${this._baseUrl}?${this._queryParamsGetAllLimited}`,
      this.httpOptions
    );
  }
}
