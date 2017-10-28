import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';


@IonicPage()
@Component({
  selector: 'page-credits',
  templateUrl: 'credits.html',
})

export class CreditsPage {
  currentPage = "credits";

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameData:GameDataProvider) {
    this.gameData.getCreditsLabels();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreditsPage');
  }

}
