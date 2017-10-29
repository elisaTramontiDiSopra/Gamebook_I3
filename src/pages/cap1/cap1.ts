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

  currentPage = "cap1";
  chapter: number;
  text: string;
  choice1; choice2; choice3: string;
  goTo1; goTo2; goTo3: number;
  fight: any;
  stats: any = [];
  goToThisChapter; savedChapter: any;
  paragraphs = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public storage:Storage, public gameData:GameDataProvider, public http: Http) {
    //se arrivo dalla fight page ho un parametro. Controllo se c'è. Se c'è lo salvo e utilizzo this.chapter come quello, altrimenti chapter =1
    this.goToThisChapter = navParams.get('goToThisChapter');
  }

  ionViewDidLoad() {
    // se arrivo dalla pagina fight o da load mi viene passato un parametro
    // per il capitolo da visualizzare e lo salvo come this.chapter
    if (this.goToThisChapter != undefined) {
      this.chapter = this.goToThisChapter
      this.gameData.getJsonData(this.chapter);
    // se non ho parametri passati prendo il valore del capitolo salvato.
    // la pagina start salva chapter = 0, quindi se chapter = 0 io sono all'inizio
    // e lo salvo come this.chapter. Se non ho capitolo salvato allora
    // this.chapter = 1
    } else {
      this.storage.get('chapter').then((savedChapter) => {
        if (savedChapter != 0) {
          console.log("SAVED CHAPTER = "+savedChapter)
          this.chapter = this.savedChapter;
        } else {
          this.chapter = 1;
        };
      }).then(() => {
        this.gameData.getJsonData(this.chapter);
        console.log(this.gameData.text);
      });
    }
  }

  fixParagraphs(text) {
    this.paragraphs = text.split("\n");
  }

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
