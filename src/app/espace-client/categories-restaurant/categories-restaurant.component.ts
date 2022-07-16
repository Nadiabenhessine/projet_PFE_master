import { Component, OnInit } from '@angular/core';
import { CategoriesRestaurantsService } from '../../services/categories-restaurants.service';
import { CategorieRestaurant} from './CategorieRestaurant' 

@Component({
  selector: 'app-categories-restaurant',
  templateUrl: './categories-restaurant.component.html',
  styleUrls: ['./categories-restaurant.component.css']
})
export class CategoriesRestaurantComponent implements OnInit {
  title = "test";

 
  //l’injection des dépendances:injecter le service dans le constructeur du composant
  constructor(private categoriesRestaurants:CategoriesRestaurantsService) { }

  ngOnInit(): void {
   console.clear;
    this.categoriesRestaurants.getCategoriesRestaurants()
    .subscribe(categoriesRestaurantsList=>{
      console.log(categoriesRestaurantsList);

    })
  }
}
