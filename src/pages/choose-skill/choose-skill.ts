import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GameDataProvider } from '../../providers/game-data/game-data';


@IonicPage()
@Component({
  selector: 'page-choose-skill',
  templateUrl: 'choose-skill.html',
})
export class ChooseSkillPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public gameData: GameDataProvider) {
    this.gameData.getSkillChoices();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseSkillPage');
  }

  public selectedSkill = "";
  public swimSelected; talkSelected; hideSelected; trackSelected = false;

  selectSwim(){
    console.log("selectSwim function");
    this.selectedSkill = "swim";
    this.swimSelected = true;
    this.hideSelected = false;
    this.talkSelected = false;
    this.trackSelected = false;
    console.log(this.swimSelected);
  }
  selectHide(){
    console.log("selectHide function");
    this.selectedSkill = "hide";
    this.swimSelected = false;
    this.hideSelected = true;
    this.talkSelected = false;
    this.trackSelected = false;
  }
  selectTrack(){
    console.log("selectTrack function");
    this.selectedSkill = "track";
    this.swimSelected = false;
    this.hideSelected = false;
    this.talkSelected = false;
    this.trackSelected = true;
  }
  selectTalk(){
    console.log("selectTalk function");
    this.selectedSkill = "talk";
    this.swimSelected = false;
    this.hideSelected = false;
    this.talkSelected = true;
    this.trackSelected = false;
  }


  confirm(){
    this.storage.set(this.selectedSkill, true);
    this.navCtrl.push("Cap1Page");
  }



}
