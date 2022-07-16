import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface Reclamation{

} 
@Injectable({ /*injectable:le service va etre utilisé dans d’autres composants,*/
  providedIn: 'root'
})
export class ReclamationsService {

  constructor(private http:HttpClient) { } /*créer une instance httpclient*/

  /* Création des fonctions*/
  //fonction1: getAllReclamations
  getReclamations():Observable<any>{
    const url = "http://127.0.0.1:8000/api/reclamations"
   return  this.http.get(url);  
  }

  //fonction2:createReclamation

}
