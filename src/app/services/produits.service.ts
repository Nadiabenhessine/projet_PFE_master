import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProduitsService {

  constructor(private http:HttpClient) { }

     /* Création des fonctions*/
     getProduits():Observable<any>{
      const url = "http://127.0.0.1:8000/api/produits"
     return  this.http.get(url);
    }
}
