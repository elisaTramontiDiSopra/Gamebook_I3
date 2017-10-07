import { Injectable } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { Storage } from '@ionic/storage'
import 'rxjs/add/operator/map';

@Injectable()
export class GameDataProvider {

  /* LANGUAGE */
  game_it = 'assets/json/gameData.json';
  inventory_it = 'assets/json/inventory.json';
  game_fur = 'assets/json/gameData_fur.json';
  inventory_fur = 'assets/json/inventory_fur.json';
  game_en = 'assets/json/gameData_en.json';
  inventory_en = 'assets/json/inventory_en.json';
  gameJson: any;
  inventoryJson: any;
  characterJson = 'assets/json/character.json';

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: Http, public storage: Storage) {
    console.log('Hello GameData Provider');
    this.gameJson = this.game_it;
    this.inventoryJson = this.inventory_it;
  }

  /*************************************************************** HOME FUNCTIONS  */
  getHome(){
    console.log('GET HOME FUNCTION');
    this.storage.get("language").then((data) => {
      console.log(data);

      //se la lingua non è definita visualizza l'alert per decidere
      if (data == null) {
        console.log("Scegli la lingua");
       // this.navCtrl.push("LanguageAlertPage");
      } else {
        switch (data) {
          case 'it':
            this.gameJson = this.game_it;
            this.inventoryJson = this.inventory_it;
            //this.getHomeButtons();
            break;
          case 'en':
            this.gameJson = this.game_en;
            this.inventoryJson = this.inventory_en;
            //this.getHomeButtons();
            break;
          case 'fur':
            this.gameJson = this.game_fur;
            this.inventoryJson = this.inventory_fur;
            //this.getHomeButtons();
            break;
        }
      }
    });
  }



/*
  getHomeButtons(){
    this.http.get(this.gameJson).map(res => res.json().home).subscribe((data) => {
      this.creditsButton = data["credits"];
      this.rulesButton = data["rules"];
      this.settingsButton = data["settings"];
    });
  }*/



}
