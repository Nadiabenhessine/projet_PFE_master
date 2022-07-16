import { Component } from '@angular/core';

@Component({
  selector: 'app-root', /* selector:donner un nom au composant afin de l'identifier par la suite*/
  templateUrl: './app.component.html',  /*fichier code html*/
  styleUrls: ['./app.component.css']  /*fichier code css*/
})
export class AppComponent {

  ngOnInit(): void {
  }
}
