import { ProduitsService } from '../../services/produits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.css']
})
export class ProduitsComponent implements OnInit {


  constructor( private produitsService:ProduitsService) { }

  ngOnInit(): void {
    console.clear();
    this.produitsService.getProduits().subscribe(produitList=>
      console.log(produitList))
  }
}
