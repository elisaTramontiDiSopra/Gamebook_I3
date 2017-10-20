import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { GameDataProvider } from '../../providers/game-data/game-data';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public http: Http, public gameData: GameDataProvider) {
    console.log("START HOME.TS");
    this.setInventoryAsNotAcquired();
  }

  ionViewDidLoad() {
    //all'avvio controlla se c'è una lingua impostata e se non c'è
    //visualizza l'alert per selezionarla
    this.storage.get("language").then((data) => {
      if(data == null) {
        this.storage.set('language', 'it');
        console.log("scegli una lingua");
        this.navCtrl.push("LanguageAlertPage");
      } else {
        console.log("lingua già impostata");
        this.gameData.handleLanguage();
      }
    });
  }

  setEverythingToZero(){
    //GAME
    this.storage.set('chapter', 0)     //CHAPTER
    //CHARACTER
    this.storage.set('name', "");       //NAME
    this.storage.set('life', 0);        //LIFE
    this.storage.set('attack', 0);      //ATTACK
    this.storage.set('money', 0);       //MONEY
    this.storage.set('reputation', 0);  //REPUTATION
    this.storage.set('minions', 0);     //MINIONS
    this.storage.set('level', 0);       //LEVEL
    this.storage.set('swim', 0);        //SWIM
    this.storage.set('track', 0);       //TRACK
    this.storage.set('hide', 0);        //HIDE
    this.storage.set('talk', 0);        //TALK
    //LAIR
    this.storage.set('table', 0);       //TABLE

    //GAME VARIABLES (necklace, biscuit)
    this.storage.set('acquiredcloak', true);
    this.storage.set('worncloak', false);
    this.storage.set('acquirednecklace', false);
    this.storage.set('wornnecklace', false);
    this.storage.set('acquiredhealthkit', true);
    this.storage.set('acquiredimmortalpotion', true);
    var test = this.storage.get('acquirednecklace');

    //set all liar objects to false
    this.storage.set("armor", false);
    this.storage.set("treasure", false);
    this.storage.set("table", false);
    this.storage.set("bookshelves", false);
    this.storage.set("bed", false);
    this.storage.set("wardrobe", false);

    console.log('acquirednecklace'+test);
    return test
}

//SET THE INVENTORY ITEMS AS NOT AQUIRED
setInventoryAsNotAcquired(){
  this.http.get('assets/json/inventory.json').map(res => res.json()).subscribe((data) => {
    console.log(data);

    //ACQUIRED + NAME ITEM
    for (let i = 0; i < data.length; i++) {
      this.storage.set("acquired"+data[i]['id'], false).then((val) =>{
        console.log("acquired"+data[i]['id'] + " done!");
        //this.acquired.push(val); 
      })
    }

    //CHECK ACQUIRED IS ALL SET TO FALSE
    for (let i = 0; i < data.length; i++) {
      this.storage.get("acquired"+data[i]['id']).then((val) =>{
        console.log("acquired"+data[i]['id'] + " " + val);
        //this.acquired.push(val); 
      })
    }




    //this.inventory = data;    
    /*
    console.log(this.inventory[0]['id']);
    for (let i = 0; i < this.inventory.length; i++) {
      this.storage.get("acquired"+this.inventory[i]['id']).then((val) =>{
        console.log(val);
        this.acquired.push(val);
        //console.log(this.acquired);
      });
      this.storage.get("worn"+this.inventory[i]['id']).then((val) =>{
        console.log("worn"+this.inventory[i]['id']+" val: "+val);
        this.worn[i]=val;
        //console.log("worn"+this.worn);
      });
    }*/
  });
} 








 start() {
 this.setEverythingToZero().then(() => {
    console.log("Everything is set to 0");
    this.navCtrl.push("ChooseCharacterPage");
  });
 }








goToFightPage(enemyAttackValue: number, enemyLifeValue: number, enemySrc: string){
     Promise.all([
     this.storage.get('life'),
     this.storage.get('attack'),
     ]).then((value) => {
       console.log(this.storage.get('life'))
       this.navCtrl.push("FightPage",{
         characterLife: value[0],
         characterAttack: value[1],
         enemyAttack: enemyAttackValue,
         enemyLife: enemyLifeValue,
         enemySrc: enemySrc,
       });
     });
}



  goToPage(namePage){
    this.navCtrl.push(namePage);
  }

}
