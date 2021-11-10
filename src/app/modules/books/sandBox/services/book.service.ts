

import { HttpClient, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookService {
  constructor(private httpClient: HttpClient) {}

  getBooks(params?) {

    let createdParams = new HttpParams();
    createdParams = createdParams.append('page', params.page);
    createdParams = createdParams.append('limit', params.limit);
    params.filters &&
      Object.keys(params.filters).forEach((key) => {
        if (params.filters[key]) {
          createdParams = createdParams.append(`filters[${key}]`, `${params.filters[key]}`);
        }
      });
    createdParams = createdParams.append('sort', 'createdAt_desc');
    return this.httpClient.get(`/books`,{params:createdParams}).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  }
  getOneBook(bookId) {

    return this.httpClient.get(`/teds/${bookId}`).pipe(
      map((response: any) => response),
      catchError((error: HttpErrorResponse) => throwError(error))
    );
  
  }

}
