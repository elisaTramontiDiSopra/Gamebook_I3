import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Storage } from '@ionic/storage';

/*
  Generated class for the GameDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GameDataProvider {

  constructor(public http: Http, public storage: Storage) {
    console.log('Hello GameDataProvider Provider');
  }

  
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

  handleLanguage(){
    this.storage.get("language").then((data) => {
      if(data == null) {
        console.log("scegli una lingua");

      } else {
        switch (data) {
          case 'it':
            this.gameJson = this.game_it;
            this.inventoryJson = this.inventory_it;
            this.getHomeButtons();
            break;
          case 'en':
            this.gameJson = this.game_en;
            this.inventoryJson = this.inventory_en;
            this.getHomeButtons();
            break;
          case 'fur':
            this.gameJson = this.game_fur;
            this.inventoryJson = this.inventory_fur;
            this.getHomeButtons();
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
  }
*/
}
