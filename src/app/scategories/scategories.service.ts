import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Scategories } from './scategories';
@Injectable({
  providedIn: 'root',
})
export class ScategoriesService {
  find(scategoriId: object) {
    throw new Error('Method not implemented.');
  }
  private apiURL = 'http://localhost:8000/api';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };
  create(scategorie: Scategories): Observable<any> {
    return this.httpClient.post(this.apiURL + '/scategories', scategorie);
  }
  constructor(private httpClient: HttpClient) {}
  getAll(): Observable<any> {
    return this.httpClient
      .get(this.apiURL + '/scategories/')
      .pipe(catchError(this.errorHandler));
  }
  errorHandler(error: any) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = error.error.message;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }
  delete(_id: object) {
    return this.httpClient.delete(this.apiURL + '/scategories/' + _id);
  }
}
