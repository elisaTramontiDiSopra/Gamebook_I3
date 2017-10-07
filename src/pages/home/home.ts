import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GameDataProvider } from '../../providers/game-data/game-data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public gameData: GameDataProvider) {
    console.log("START HOME.TS");
  }

  ionViewDidLoad() {
    //all'avvio controlla se c'è una lingua impostata e se non c'è
    //visualizza l'alert per selezionarla
    this.storage.get("language").then((data) => {
      if(data == null) {
        console.log("scegli una lingua");
        this.navCtrl.push("LanguageAlertPage");
      } else {
        console.log("lingua già impostata");
        this.gameData.handleLanguage();
      }
    });
  }

}
