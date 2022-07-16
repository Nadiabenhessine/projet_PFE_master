import { VillesService } from '../../services/villes.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-villes',
  templateUrl: './villes.component.html',
  styleUrls: ['./villes.component.css']
})
export class VillesComponent implements OnInit {
  //l’injection des dépendances:injecter le service dans le constructeur du composant
  constructor( private villes:VillesService) { }

  ngOnInit(): void {
    console.clear;
    this.villes.getVilles().subscribe(villesList=>{
      console.log(villesList);
    })
/*
    this.villes.getVilleById().subscribe(villeById=>{
      console.log(villeById);
  })
*/
    
}
}
