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

  creditsButton: any;
  rulesButton: any;
  settingsButton: any;
  loadButton: any;

  handleLanguage(){
    this.storage.get("language").then((data) => {
      if(data == null) {
        console.log("scegli una lingua");
        //this.navCtrl.push("LanguageAlertPage");
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

  getHomeButtons(){
    this.http.get(this.gameJson).map(res => res.json().home).subscribe((data) => {
      this.creditsButton = data["credits"];
      this.rulesButton = data["rules"];
      this.settingsButton = data["settings"];
    });
  }


  /************************************************************************* CHOOSE CHARACTER FUNCTION */

  charDescription: any;
  charLife: any;
  charAttack: any;
  charMoney: any;
  charReputation: any;
  charButtonText: any;

  getCharachtersStats(){
    this.http.get(this.gameJson).map(res => res.json()).subscribe((data) => {
      this.charDescription = data["shaiChararcter"]["charDescription"];
      this.charLife = data["shaiChararcter"]["charLife"];
      console.log(this.charLife)
      this.charAttack = data["shaiChararcter"]["charAttack"];
      this.charMoney = data["shaiChararcter"]["charMoney"];
      this.charReputation = data["shaiChararcter"]["charReputation"];
      this.charButtonText = data["shaiChararcter"]["charButtonText"];
    });
  }


  swimLabel; trackLabel; hideLabel; talkLabel : any;
  lifeLabel; attackLabel; moneyLabel; reputationLabel; pointsLabel: any;
  fightTextLabel; fightMsg1; fightMsg2; fightMsg3; fightMsg4: any;

  winTitle: any;
  winText: any;
  loseTitle: any;
  loseText: any;
  keepAdventureText: any;
  startOverText: any;
  liveAgainText: any;



  getLabelsName(){
    this.http.get(this.gameJson).map(res => res.json()).subscribe((data) => {
      this.swimLabel = data["skills"]["swim"];
      console.log("this.swimLabel "+this.swimLabel);
      this.hideLabel = data["skills"]["hide"];
      this.trackLabel = data["skills"]["track"];
      this.talkLabel = data["skills"]["talk"];

      this.lifeLabel = data["labels"]["life"];
      this.attackLabel = data["labels"]["attack"];
      this.moneyLabel = data["labels"]["money"];
      this.reputationLabel = data["labels"]["reputation"];
      this.pointsLabel = data ["labels"]["points"];
      this.fightTextLabel = data ["labels"]["fightText"];
      this.fightMsg1 = data ["labels"]["fightMsg1"];
      this.fightMsg2 = data ["labels"]["fightMsg2"];
      this.fightMsg3 = data ["labels"]["fightMsg3"];
      this.fightMsg4 = data ["labels"]["fightMsg4"];
      //ALERT
      this.winTitle = data["labels"]["alert"]["winTitle"];
      this.winText = data["labels"]["alert"]["winText"];
      this.loseTitle = data["labels"]["alert"]["loseTitle"];
      this.loseText = data["labels"]["alert"]["loseText"];
      this.keepAdventureText = data["labels"]["alert"]["keepAdventureText"];
      this.startOverText = data["labels"]["alert"]["startOverText"];
      this.liveAgainText = data["labels"]["alert"]["liveAgainText"];
    });
  }

  /********************************************************************************* CHOOSE SKILLS FUNCIONS */

  swim; hide; track; talk: any;
  swimText; hideText; trackText; talkText: any;
  chooseSkillText; chooseSkillTitle; chooseSkillButton: any;

  getSkillChoices(){
    this.http.get(this.gameJson).map(res => res.json()).subscribe((data) => {
      this.swim = data["skills"]["swim"];
      this.swimText = data["skills"]["swimText"];
      this.hide = data["skills"]["hide"];
      this.hideText = data["skills"]["hideText"];
      this.track = data["skills"]["track"];
      this.trackText = data["skills"]["trackText"];
      this.talk = data["skills"]["talk"];
      this.talkText = data["skills"]["talkText"];
      this.chooseSkillText = data["skills"]["chooseSkillText"];
      this.chooseSkillTitle = data["skills"]["chooseSkillTitle"];  
      this.chooseSkillButton = data["skills"]["chooseSkillButton"];   
    });
  }

  /********************************************************************************* INVENTORY FUNCIONS */
  lifeValue; attackValue; moneyValue; reputationValue: any; 

  getInitialStats(){
    console.log("initial stats retrieved");
    Promise.all ([
      this.storage.get('life'),
      this.storage.get('attack'),
      this.storage.get('money'),
      this.storage.get('reputation'),
    ]).then(value => {
      this.lifeValue = value[0],
      this.attackValue = value[1],
      this.moneyValue = value[2],
      this.reputationValue = value[3]
    })
  }

  updateStat(stat, value){
    switch (stat) {
      case 'life':
        this.updateLife(value);
        break;
      case 'attack':
        this.updateAttack(value);
        break;
      case 'money':
        //this.updateMoney(value);
        break; 
      case 'reputation':
        console.log("stat = reputation");
        console.log ("value to add "+value);
        this.updateReputation(value);
        break; 
      }
  }

  updateMoney(operation, value) {
    this.storage.get('money').then((data) => {
      if (operation == "+") {
        this.moneyValue = +data + +value;
        // console.log(this.moneyValue);
        this.storage.set("money", this.moneyValue);
      }
      if (operation == "-") {
        this.moneyValue = +data - +value;
        this.storage.set("money", this.moneyValue);
      }
    })
  }

  updateReputation(value) {
    this.storage.get('reputation').then((data) => {  
       //console.log("reputation value" +value)       ;
       this.reputationValue = +data + +value;
       //console.log("new reputation value in game data "+this.reputationValue);
       this.storage.set("reputation", this.reputationValue);
      });
  }
  updateLife(value) {
    this.storage.get('life').then((data) => {         
       this.lifeValue = +data + +value;
       this.storage.set("life", this.lifeValue);
      });
  }
  updateAttack(value) {
    this.storage.get('attack').then((data) => {         
       this.attackValue = +data + +value;
       this.storage.set("attack", this.attackValue);
      });
  }

  
  /********************************************************************************* CAP1 FUNCIONS */
  
  text; beforeTextGood; beforeTextBad; afterTextGood; afterTextBad: string; 
  choice1; choice2; choice3: string;
  goTo1; goTo2; goTo3: number;
  fight: any;
  itemAcquired; skillAcquired; statAcquired: any;
  chapter: number;

  getJsonData(chapter: number){
    this.http.get(this.gameJson).map(res => res.json()).subscribe((data) => {
    this.beforeTextGood = data["story"][chapter]["beforeTextGood"];
    this.beforeTextBad = data["story"][chapter]["beforeTextBad"];
    this.text = data["story"][chapter]["text"];
    this.afterTextGood = data["story"][chapter]["afterTextGood"];
    this.afterTextBad = data["story"][chapter]["afterTextBad"];
    this.choice1 = data["story"][chapter]["choice1"];
    this.goTo1 = data["story"][chapter]["goTo1"];
    this.choice2 = data["story"][chapter]["choice2"];
    this.goTo2 = data["story"][chapter]["goTo2"];
    this.choice3 = data["story"][chapter]["choice3"];
    this.goTo3 = data["story"][chapter]["goTo3"];
    this.fight = data["story"][chapter]["fight"];
    this.itemAcquired = data["story"][chapter]["itemAcquired"];
    this.skillAcquired = data["story"][chapter]["skillAcquired"];
    this.chapter = data["story"][chapter]["chapter"];
    return data;
   });
 }




}
