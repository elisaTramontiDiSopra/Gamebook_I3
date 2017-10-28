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

  currentPage = "home";
  currentChapter: any;
  gameStarted: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public http: Http, public gameData: GameDataProvider) {
    //this.storage.set('language', 'it');
    this.storage.get("chapter").then((data) => {
      if(data == undefined || data < 1) {
        this.gameStarted = false
      } else {
        this.gameStarted = true;
      }
    });
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

  // arrays of elements to set to zero or false at the beginning of the game
  toZero = [
    'chapter',                                  //CHAPTER
    'life', 'attack', 'money', 'reputation',    //BASIC STATS
    'swim', 'track', 'hide', 'talk',            //SKILLS
    ]

  toFalse = [
    'armor', 'treasure', 'table', 'bookshelves', 'bed', 'wardrobe'    //LAIR ELEMENTS
  ]

  setEverythingToFalse(){
    this.toFalse.forEach(item => {
      this.storage.set(item, false);
    });
  }


  setEverythingToZero(){
    //GAME
    this.storage.set('chapter', 0)     //CHAPTER
    //CHARACTER
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
    this.setEverythingToFalse();

    //GAME VARIABLES (necklace, biscuit)
    this.storage.set('acquiredcloak', true);
    this.storage.set('worncloak', false);
    this.storage.set('acquirednecklace', false);
    this.storage.set('wornnecklace', false);
    this.storage.set('acquiredhealthkit', true);
    this.storage.set('acquiredimmortalpotion', true);
    var test = this.storage.get('acquirednecklace');

    //SET INVENTORY TO NOT ACQUIRED
    //this.setInventoryAsNotAcquired();

  return test
}

//SET THE INVENTORY ITEMS AS NOT AQUIRED
setInventoryAsNotAcquired(){
  this.http.get('assets/json/inventory.json').map(res => res.json()).subscribe((data) => {
    //ACQUIRED + NAME ITEM
    for (let i = 0; i < data.length; i++) {
      this.storage.set("acquired"+data[i]['id'], false).then((val) =>{
        //console.log("acquired"+data[i]['id'] + " done!");
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

  load() {
  this.storage.get('chapter').then((data) => {
    this.currentChapter = data;
    }).then(() => {
      console.log(this.currentChapter);
      this.navCtrl.push("Cap1Page", {
        goToThisChapter: this.currentChapter
      });
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
