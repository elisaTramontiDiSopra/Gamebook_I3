import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { GameDataProvider } from '../../providers/game-data/game-data';

@Component({
  selector: 'choices',
  templateUrl: 'choices.html'
})
export class ChoicesComponent {

  thereIsAChoice1; thereIsAChoice2; thereIsAChoice3; gotSkill: boolean;

  @Input() chapNum;
  @Input() choice1;
  @Input() goTo1;
  @Input() choice2;
  @Input() goTo2;
  @Input() choice3;
  @Input() goTo3;
  @Input() skillRequired;
  @Input() itemRequired;
  @Input() skillAcquired;
  @Input() itemAcquired;
  @Input() fightParams;

  constructor(public gameData: GameDataProvider, public storage:Storage, public navCtrl:NavController) {
    console.log('Hello Choices Component');
  }

  ionViewDidLoad(chapterNumber: number) {
    //this.isThereAChoice();
    //this.gameData.getJsonData(this.chapterNumber)
  }

  acquireObject(itemName) {
    this.storage.set("acquired"+itemName, true);
  }

  choice1Function(){
    console.log('choice function 1');
    //check if something is aquired with choice 1 add it as aquired
    if (this.itemAcquired !== undefined && this.itemAcquired[0] == 1) {
      this.storage.set("acquired"+this.itemAcquired[1], true);
    }
    if (this.skillAcquired !== undefined && this.skillAcquired[0] == 1) {
      this.storage.set(this.skillAcquired[1], true);
    }
    //check if I'm going to the fight page
    if (this.goTo1 == "Fight") {
      this.navCtrl.push("FightPage", {
        fightParams: this.fightParams
      });
    }
    //check if there is a skill required with this choice
    //check if this skill is linked to choice 1
    //check if the skill is aquired
    //if it's acqured go to the first chapter listed
    //otherwise go to the second chapter listed
    //do the same for item required
    //in all other cases just goTo chapter
    if (this.skillRequired !== undefined && this.skillRequired[0] == 1) {
      this.storage.get(this.skillRequired[1]).then((data) => {
        console.log("data "+ data);
        if (data == true) {
          this.storage.set("chapter", this.skillRequired[2]);
          this.gameData.getJsonData(this.skillRequired[2]);
        } else {
          this.storage.set("chapter", this.skillRequired[3]);
          this.gameData.getJsonData(this.skillRequired[3]);
        }
      });
    //same check for item required
    } else if (this.itemRequired !== undefined && this.itemRequired[0] == 1) {
      this.storage.get(this.itemRequired[1]).then((data) => {
        console.log("data "+ data);
        if (data == true) {
          this.storage.set("chapter", this.itemRequired[2]);
          this.gameData.getJsonData(this.itemRequired[2]);
        } else {
          this.storage.set("chapter", this.itemRequired[3]);
          this.gameData.getJsonData(this.itemRequired[3]);
        }
      });
    } else {
      console.log("gotoChapter "+this.goTo1);
      this.storage.set("chapter", this.goTo1);
      this.gameData.getJsonData(this.goTo1);
    }
  }


  choice2Function(){
    console.log('choice function 2');
    //check if something is aquired with choice 1 add it as aquired
    if (this.itemAcquired !== undefined && this.itemAcquired[0] == 2) {
      this.storage.set("acquired"+this.itemAcquired[1], true);
    }
    if (this.skillAcquired !== undefined && this.skillAcquired[0] == 2) {
      this.storage.set(this.skillAcquired[1], true);
    }
    //check if I'm going to the fight page
    if (this.goTo1 == "Fight") {
      this.navCtrl.push("FightPage", {
        fightParams: this.fightParams
      });
    }
    //check if there is a skill required with this choice
    if (this.skillRequired[0] == 2) {
      this.storage.get(this.skillRequired[1]).then((data) => {
        console.log("data "+ data);
        if (data == true) {
          this.storage.set("chapter", this.skillRequired[2]);
          this.gameData.getJsonData(this.skillRequired[2]);
        } else {
          this.storage.set("chapter", this.skillRequired[3]);
          this.gameData.getJsonData(this.skillRequired[3]);
        }
      });
    //same check for item required
    } else if (this.itemRequired[0] == 2) {
      this.storage.get(this.itemRequired[1]).then((data) => {
        console.log("data "+ data);
        if (data == true) {
          this.storage.set("chapter", this.itemRequired[2]);
          this.gameData.getJsonData(this.itemRequired[2]);
        } else {
          this.storage.set("chapter", this.itemRequired[3]);
          this.gameData.getJsonData(this.itemRequired[3]);
        }
      });
    } else {
      console.log("gotoChapter "+this.goTo2);
      this.storage.set("chapter", this.goTo2);
      this.gameData.getJsonData(this.goTo2);
    }
  }


  choice3Function(){
    console.log('choice function 3');
    //check if something is aquired with choice 1 add it as aquired
    if (this.itemAcquired !== undefined && this.itemAcquired[0] == 3) {
      this.storage.set("acquired"+this.itemAcquired[1], true);
    }
    if (this.skillAcquired !== undefined && this.skillAcquired[0] == 3) {
      this.storage.set(this.skillAcquired[1], true);
    }
    //check if I'm going to the fight page
    if (this.goTo1 == "Fight") {
      this.navCtrl.push("FightPage", {
        fightParams: this.fightParams
      });
    }
    //check if there is a skill required with this choice
    if (this.skillRequired[0] == 3) {
      this.storage.get(this.skillRequired[1]).then((data) => {
        console.log("data "+ data);
        if (data == true) {
          this.storage.set("chapter", this.skillRequired[2]);
          this.gameData.getJsonData(this.skillRequired[2]);
        } else {
          this.storage.set("chapter", this.skillRequired[3]);
          this.gameData.getJsonData(this.skillRequired[3]);
        }
      });
    //same check for item required
    } else if (this.itemRequired[0] == 3) {
      this.storage.get(this.itemRequired[1]).then((data) => {
        console.log("data "+ data);
        if (data == true) {
          this.storage.set("chapter", this.itemRequired[2]);
          this.gameData.getJsonData(this.itemRequired[2]);
        } else {
          this.storage.set("chapter", this.itemRequired[3]);
          this.gameData.getJsonData(this.itemRequired[3]);
        }
      });
    } else {
      console.log("gotoChapter "+this.goTo3);
      this.storage.set("chapter", this.goTo3);
      this.gameData.getJsonData(this.goTo3);
    }
  }


/*
  choice2Function(){
    //console.log('choice function 2');
    if (this.itemAcquired !== undefined && this.itemAcquired[0] == 2) {
      console.log('choice function 2 new item');
      this.storage.set("acquired"+this.itemAcquired[1], true);
    }
    if (this.skillAcquired !== undefined && this.skillAcquired[0] == 2) {
      console.log('choice function 2 new skill');
      this.storage.set(this.skillAcquired[1], true);
    }
    if (this.goTo2 == "Fight") {
      this.navCtrl.push("FightPage", {
        fightParams: this.fightParams
      });
    } else {
      //console.log('choice function 2');
      this.storage.set("chapter", this.goTo2);
      this.gameData.getJsonData(this.goTo2);
    }
  }

  choice3Function(){
    console.log('choice function 3');

    if (this.itemAcquired !== undefined && this.itemAcquired[0] == 3) {
      this.storage.set("acquired"+this.itemAcquired[1], true);
    }

    if (this.skillAcquired !== undefined && this.skillAcquired[0] == 3) {
      this.storage.set(this.skillAcquired[1], true);
    }
    if (this.goTo3 == "Fight") {
      this.navCtrl.push("FightPage", {
        fightParams: this.fightParams
      });
    } else {
      this.storage.set("chapter", this.goTo3);
      this.gameData.getJsonData(this.goTo3);
    }
  }

*/



}
