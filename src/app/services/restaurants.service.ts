import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RestaurantsService {

  constructor(private http:HttpClient) { }

   /* Création des fonctions*/
   getRestaurants():Observable<any>{
    const url = "http://127.0.0.1:8000/api/restaurants"
   return  this.http.get(url);
  }
}
