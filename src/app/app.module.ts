import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './espace-client/footer/footer.component';
import { HeaderComponent } from './espace-client/header/header.component';
import { NumeroComponent } from './espace-client/numero/numero.component';
import { SlogonComponent } from './espace-client/slogon/slogon.component';
import { VillesComponent } from './espace-client/villes/villes.component';
import { CategoriesRestaurantComponent } from './espace-client/categories-restaurant/categories-restaurant.component';
import { CommentCaMarcheComponent } from './espace-client/comment-ca-marche/comment-ca-marche.component';
import { NewslettersComponent } from './espace-client/newsletters/newsletters.component';
import { InscrireLivreurVendeurComponent } from './espace-client/inscrire-livreur-vendeur/inscrire-livreur-vendeur.component';
import { VillesService } from './services/villes.service';
import { ProfilOperateurComponent } from './espace-operateur/profil-operateur/profil-operateur.component';

@NgModule({
  declarations: [ //les composants qui appartient a ce module
    AppComponent, 
    PageNotFoundComponent,
    FooterComponent,
    HeaderComponent,
    NumeroComponent,
    SlogonComponent,
    VillesComponent,
    CategoriesRestaurantComponent,
    CommentCaMarcheComponent,
    NewslettersComponent,
    InscrireLivreurVendeurComponent,
    ProfilOperateurComponent,

      ],
  imports: [  
    BrowserModule,
    HttpClientModule, // importer HttpClientModule toujours après BrowserModule
    AppRoutingModule,
  ],
  providers: [
    VillesService,
  ], //ajouter les services a utilisés
  bootstrap: [AppComponent] //le 1er composant a exécuter lors du démarrage de l'app
})
export class AppModule { }
