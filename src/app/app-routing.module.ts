import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { VillesComponent } from './espace-client/villes/villes.component';
import { ConnexionComponent } from './espace-operateur/connexion/connexion.component';
import { CategoriesProduitsComponent } from './espace-operateur/categories-produits/categories-produits.component';
import { ProduitsComponent } from './espace-operateur/produits/produits.component';
import { ReclamationsComponent } from './reclamations/reclamations.component';
import { NavbarSidebarComponent } from './espace-operateur/navbar-sidebar/navbar-sidebar.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { NumeroComponent } from './espace-client/numero/numero.component';
import { HeaderComponent } from './espace-client/header/header.component';
import { SlogonComponent } from './espace-client/slogon/slogon.component';
import { CommentCaMarcheComponent } from './espace-client/comment-ca-marche/comment-ca-marche.component';
import { NewslettersComponent } from './espace-client/newsletters/newsletters.component';
import { InscrireLivreurVendeurComponent } from './espace-client/inscrire-livreur-vendeur/inscrire-livreur-vendeur.component';
import { FooterComponent } from './espace-client/footer/footer.component';
import { ConnexionInscriptionComponent } from './espace-client/connexion-inscription/connexion-inscription.component';
import { ProfilClientComponent } from './espace-client/profil-client/profil-client.component';


const routes: Routes = [
  { path: 'villes' , component:VillesComponent },
  { path: 'connexion' , component: ConnexionComponent},
  { path: 'pagenotfound' , component:PageNotFoundComponent},
  { path: 'categoriesproduits', component:CategoriesProduitsComponent},
  { path: 'produit', component:ProduitsComponent},
  { path: 'reclamations', component:ReclamationsComponent},
  { path: 'navbarsidebar', component:NavbarSidebarComponent},
  { path: 'Numero', component:NumeroComponent},
  { path: 'header', component:HeaderComponent},
  { path: 'slogon', component:SlogonComponent},
  { path: 'Commentcamarche', component:CommentCaMarcheComponent},
  { path: 'newsletter', component:NewslettersComponent},
  { path: 'inscrirelivreurvendeur', component:InscrireLivreurVendeurComponent},
  { path: 'footer', component:FooterComponent},
  { path: 'connexioninscription', component:ConnexionInscriptionComponent },
  { path: 'profilclient', component:ProfilClientComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
