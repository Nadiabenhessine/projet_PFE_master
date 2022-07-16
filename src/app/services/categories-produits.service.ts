import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesProduitsService {

  constructor(private http:HttpClient) { }

  /* Création des fonctions*/

  //fonction getAll
 getCategoriesProduits():Observable<any>{
  const url = "http://127.0.0.1:8000/api/categories_produits"
 return  this.http.get(url);
}
  //fonction Post


  //fonction get by id


  //fonction delete



}
