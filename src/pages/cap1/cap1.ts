import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

import { GameDataProvider } from '../../providers/game-data/game-data';


@IonicPage()
@Component({
  selector: 'page-cap1',
  templateUrl: 'cap1.html',
})
export class Cap1Page {

  chapter: number;  
  
  text: string;
  choice1; choice2; choice3: string;
  goTo1; goTo2; goTo3: number;
  fight: any;  
  stats: any = []; 
  
  goToThisChapter: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public gameData:GameDataProvider, public http: Http) {
    this.goToThisChapter = navParams.get('goToThisChapter');
    console.log("goToThisChapter "+this.goToThisChapter);
    if (this.goToThisChapter != undefined) {
      this.chapter = this.goToThisChapter
    } else {
      this.chapter = 1;
    }
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad Cap1Page');
    this.gameData.getJsonData(this.chapter);
    this.storage.set('chapter', this.chapter);  
    console.log("this.chapter " + this.chapter);                //SAVE CHAPTER VALUE
  }

  /* */
  statsChangeSave(extra) {
    for (var i: number = 0; i < extra.lenght; i = i + 2) {
      var label = extra[i];
      var labelValue = extra [i+1];
      this.storage.set(label, labelValue);
    }
  }

  goToPage(test: any){
      this.navCtrl.push(test);
  }

}