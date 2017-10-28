import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'back-bar',
  templateUrl: 'back-bar.html'
})

export class BackBarComponent {

  @Input() currentPage: string;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

    back() {
      if (this.currentPage = "inventory") {
        console.log("sei nell'inventario e torni alla pagina carachter");
        this.navCtrl.push("CharacterPage");
      } else {
        console.log('clicked back');
        this.navCtrl.pop();
      }
    }



  }
