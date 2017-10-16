import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';

@IonicPage()
@Component({
  selector: 'page-win-alert',
  templateUrl: 'win-alert.html',
})
export class WinAlertPage {

  public goToThisChapter:any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private gameData: GameDataProvider) {
    this.goToThisChapter = navParams.get('goToThisChapter');
    this.gameData.getLabelsName();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WinAlertPage');
  }

  goOnReading(){
    this.navCtrl.push("Cap1Page", {
      goToThisChapter: this.goToThisChapter 
    });
  }

}