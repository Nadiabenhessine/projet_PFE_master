import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoriesRestaurantsService {

  constructor(private http:HttpClient) { }

 /* Création des fonctions*/
 getCategoriesRestaurants():Observable<any>{
  const url = "http://127.0.0.1:8000/api/categories_restaurants"
 return  this.http.get(url,{ observe: 'response' });
}

}
