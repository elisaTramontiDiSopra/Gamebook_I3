import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GameDataProvider } from '../../providers/game-data/game-data';

@IonicPage()
@Component({
  selector: 'page-character',
  templateUrl: 'character.html',
})
export class CharacterPage {
  currentPage = "character";

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public gameData:GameDataProvider) {}

    src: string = "assets/img/charPageReady/";

    ionViewDidLoad() {
      console.log('ionViewDidLoad CharacterPage');
      this.gameData.getLabelsName();
      this.gameData.getSkillsStats();
    }

    goToInventory() {
      this.navCtrl.push("InventoryPage");
    }

    goToLair() {
      this.navCtrl.push("LairPage");
    }

}
