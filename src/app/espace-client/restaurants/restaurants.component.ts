import { RestaurantsService } from '../../services/restaurants.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-restaurants',
  templateUrl: './restaurants.component.html',
  styleUrls: ['./restaurants.component.css']
})
export class RestaurantsComponent implements OnInit {

    //l’injection des dépendances:injecter le service dans le constructeur du composant
  constructor( private restaurantsService: RestaurantsService) { }

  ngOnInit(): void {
    console.clear();
    this.restaurantsService.getRestaurants().subscribe(restaurantList=>
      console.log(restaurantList))
  }

}
