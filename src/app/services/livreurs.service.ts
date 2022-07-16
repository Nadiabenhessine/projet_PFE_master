import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LivreursService {

  constructor(private http:HttpClient) { }

    /* Création des fonctions*/
    getLivreurs():Observable<any>{
      const url = "http://127.0.0.1:8000/api/livreurs"
     return  this.http.get(url);
    }
}
