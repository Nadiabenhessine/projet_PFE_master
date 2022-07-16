import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './../app-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { DashboardComponent } from './dashboard/dashboard.component';
import { CategoriesProduitsComponent } from './categories-produits/categories-produits.component';
import { ProduitsComponent } from './produits/produits.component';
import { ReclamationsComponent } from '../reclamations/reclamations.component';

import { ReclamationsService } from '../services/reclamations.service';
import { CategoriesProduitsService } from '../services/categories-produits.service';
import { ProduitsService } from '../services/produits.service';
import { NavbarSidebarComponent } from './navbar-sidebar/navbar-sidebar.component';
import { ConnexionComponent } from '../espace-operateur/connexion/connexion.component';



@NgModule({
  declarations: [ // liste composants dans ce module
    DashboardComponent,
    CategoriesProduitsComponent,
    ProduitsComponent,
    ReclamationsComponent,
    NavbarSidebarComponent,   
    ConnexionComponent  
  ],
  
  providers: [  /*déclare nom de service utilisé dans ce module */
  CategoriesProduitsService,  
  ProduitsService,
  ReclamationsService,    
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
  ]
})
export class EspaceOperateurModule { }
