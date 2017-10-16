import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { GameDataProvider } from '../../providers/game-data/game-data';

/**
 * Generated class for the ChooseCharacterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-choose-character',
  templateUrl: 'choose-character.html',
})
export class ChooseCharacterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage: Storage, public gameData: GameDataProvider) {
    this.gameData.getCharachtersStats();
    this.gameData.getLabelsName();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChooseCharacterPage');
  }

  setStats(){
    console.log('setStats function');
    var resVal: any = 0;
    this.storage.set('life', this.gameData.charLife);   //LIFE
    this.storage.set('attack', this.gameData.charAttack);   // ATTACK 
    this.storage.set('reputation', this.gameData.charReputation);   //REPUTATION 
    this.storage.set('money', this.gameData.charMoney);   //MONEY
    return resVal;
  }
  
  chooseChar(){
    this.setStats();
    this.navCtrl.push("ChooseSkillPage");
  }

}
