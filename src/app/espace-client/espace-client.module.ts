import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsComponent } from './restaurants/restaurants.component';
import { CategoriesProduitsComponent } from './categories-produits/categories-produits.component';
import { ProduitsComponent } from './produits/produits.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';

import { VillesService } from '../services/villes.service';
import { CategoriesRestaurantsService } from '../services/categories-restaurants.service';
import { RestaurantsService } from '../services/restaurants.service';
import { CategoriesProduitsService } from '../services/categories-produits.service';
import { ProduitsService } from '../services/produits.service';
import { ReclamationsService } from '../services/reclamations.service';

import { CommandeComponent } from './commande/commande.component';
import { ProfilClientComponent } from './profil-client/profil-client.component';




@NgModule({
  declarations: [
    RestaurantsComponent,
    CategoriesProduitsComponent,
    ProduitsComponent,
    ReclamationsComponent,
    CommandeComponent
  ],
  providers: [
    VillesService,
    CategoriesRestaurantsService,
    RestaurantsService,
    CategoriesProduitsService,
    ProduitsService,
    ReclamationsService,
    ProfilClientComponent
  ], /*déclare nom de service utilisé dans ce module */
  imports: [
    CommonModule,
    AppRoutingModule
  ]
})
export class EspaceClientModule { }
