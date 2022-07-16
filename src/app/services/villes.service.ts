import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VillesService {

  constructor(private httpclient:HttpClient) {}

  /* Création des fonctions*/

  //fonction1: getAll
  getVilles():Observable<any>{
   return  this.httpclient.get("http://127.0.0.1:8000/api/villes");
  }

  /*
  fonction2: getVilleByID
  getVilleById():Observable<any>{
    const params1 = new HttpParams().set("id",'2');
    return this.httpclient.get("http://127.0.0.1:8000/api/villes",{params:params1})
  }
  */




}
