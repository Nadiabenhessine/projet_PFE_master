import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RecetteJourService {

 /*créer une instance httpclient*/
  constructor(private http:HttpClient) { }

  /* Création des fonctions*/
getRecetteJour():Observable<any>{
  const url = "http://127.0.0.1:8000/api/recette_jours"
  return  this.http.get(url);
}

}
