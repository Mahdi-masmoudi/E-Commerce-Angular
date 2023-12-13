import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductsService } from '../products/products.service';
import { CategorieService } from '../categorie/categorie.service';
@Injectable({
  providedIn: 'root',
})
export class CategorieArticleListComponent {
  constructor(private httpClient: HttpClient) {}
  private apiURL = 'http://localhost:8000/api';

  getAll(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/categories/');
  }
  getAllp(): Observable<any> {
    return this.httpClient.get(this.apiURL + '/articles/');
  }
}
