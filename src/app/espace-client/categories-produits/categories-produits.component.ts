import { CategoriesProduitsService } from './../../services/categories-produits.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories-produits',
  templateUrl: './categories-produits.component.html',
  styleUrls: ['./categories-produits.component.css']
})
export class CategoriesProduitsComponent implements OnInit {

  constructor( private categoriesProduitsService:CategoriesProduitsService) { }

  ngOnInit(): void {
    console.clear();
    this.categoriesProduitsService.getCategoriesProduits().subscribe(categoriesProduitList=>
      console.log(categoriesProduitList))
  }

}
