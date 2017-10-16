import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { GameDataProvider } from '../../providers/game-data/game-data';

@Component({
  selector: 'bottom-bar',
  templateUrl: 'bottom-bar.html'
})
export class BottomBarComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams, public gameData:GameDataProvider) {
    this.gameData.getInitialStats();
  }

  goToInventory() {
    this.navCtrl.push("InventoryPage");
  }

}
