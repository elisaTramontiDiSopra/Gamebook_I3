import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { GameDataProvider } from '../../providers/game-data/game-data';

import { BackBarComponent } from '../../components/back-bar/back-bar';

@IonicPage()
@Component({
  selector: 'page-inventory',
  templateUrl: 'inventory.html',

})

export class InventoryPage {

  inventory: any;
  imgUrl: string = "../../assets/img/inventoryReady/";
  
  acquired; worn: any = [];
 
  constructor(public navCtrl: NavController, public navParams: NavParams, public gameData:GameDataProvider, public http: Http, public storage:Storage) {
    this.http.get('assets/json/inventory.json').map(res => res.json()).subscribe((data) => {
      console.log(data);
      this.inventory = data;
     // this.checkAquired();    
      for (let i = 0; i < this.inventory.length; i++) {
        this.storage.get("acquired"+this.inventory[i]['id']).then((val) =>{
          this.acquired.push(val);
          //console.log(this.acquired);
        });
        this.storage.get("worn"+this.inventory[i]['id']).then((val) =>{
          console.log("worn"+this.inventory[i]['id']+" val: "+val);
          this.worn[i]=val;
          //console.log("worn"+this.worn);
        });
      }
    });
  } 

  sell(i, item, price){
    this.gameData.updateMoney("+", price);
    this.storage.set("acquired"+item, false);
    this.acquired[i]=false
  }

  wear(i, item){
    console.log("worn"+item);
    this.storage.set("worn"+item, true);
    this.worn[i]=true;
    var skill = this.inventory[i]["wearSkill"];
    var stat = this.inventory[i]["wearStat"];
    var statValue = this.inventory[i]["wearStatValue"];
    if(stat !== undefined) {
      console.log('stat !== undefined');
      this.gameData.updateStat(stat, statValue);
    }
    if(skill !== undefined) {
      this.storage.set(skill, true);
    }
  }

  unwear(i, item){
    console.log("unworn"+item);
    this.storage.set("worn"+item, false);
    this.worn[i]=false;
    var skill = this.inventory[i]["wearSkill"];
    var stat = this.inventory[i]["wearStat"];
    var statValue = -this.inventory[i]["wearStatValue"];
    if(stat !== undefined) {
      this.gameData.updateStat(stat, statValue);
    }
    if(skill !== undefined) {
      this.storage.set(skill, true);
    }
  }

  use(i) {
    var stat = this.inventory[i]["useStat"];
    var statValue = this.inventory[i]["useStatValue"];
    this.gameData.updateStat(stat, statValue);
    this.storage.set("acquired"+this.inventory[i]["id"], false);
    this.acquired[i]=false
  }



}

