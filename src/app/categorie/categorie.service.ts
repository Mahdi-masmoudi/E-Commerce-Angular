import { Injectable } from '@angular/core';
import { Categorie } from './categorie';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  getCategories() {
    throw new Error('Method not implemented.');
  }
  get() {
    throw new Error('Method not implemented.');
  }
  private apiURL = "http://localhost:8000/api";
  uploadSignature(vals: any): Observable<any>{
    let data = vals;
    return this.httpClient.post('https://api.cloudinary.com/v1_1/isetsfax/image/upload',data)
    }


/*------------------------------------------*/
  constructor(private httpClient: HttpClient) { }

getAll(): Observable<any> {
return this.httpClient.get(this.apiURL + '/categories/')
}

create(categorie:Categorie): Observable<any> {

return this.httpClient.post(this.apiURL + '/categories/',categorie)
}

find(_id:object): Observable<any> {

return this.httpClient.get(this.apiURL + '/categories/' + _id)
}

update(_id:object, categorie:Categorie): Observable<any> {

return this.httpClient.put(this.apiURL + '/categories/' + _id, categorie)
}

delete(_id:object){
return this.httpClient.delete(this.apiURL + '/categories/' + _id)
}
}
