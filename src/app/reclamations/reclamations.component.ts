import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ReclamationsService } from '../services/reclamations.service'

@Component({
  selector: 'app-reclamations',
  templateUrl: './reclamations.component.html',
  styleUrls: ['./reclamations.component.css']
})
export class ReclamationsComponent implements OnInit {

  //l’injection des dépendances:injecter le service dans le constructeur du composant
  constructor(private reclamationsService: ReclamationsService) { 
  }
  
  //chaque subscribe doit être dans OnInit !
  ngOnInit(): void {
    console.clear;
    this.reclamationsService.getReclamations().subscribe(data=>{
      console.log(data);
    })
  }
}
