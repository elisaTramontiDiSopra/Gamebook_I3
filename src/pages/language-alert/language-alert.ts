import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Storage } from '@ionic/storage';

import { HomePage } from '../home/home';

@IonicPage()
@Component({
  selector: 'page-language-alert',
  templateUrl: 'language-alert.html',
})
export class LanguageAlertPage {

  it = ["Scegli la lingua", "Sei sicuro di voler leggere la storia in italiano?", "Sicuro"];
  en = ["Choose your language","Are you sure you want to read the story in english?", "I'm sure"];
  fur = ["la to lenga", "Setu sigur chi tu vul gjei la storia par furlan?", "Sigur"];
  lang: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,  public storage: Storage, ) {
    this.lang = this.it;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LanguageAlertPage');
  }

  setLanguageIt(){
    console.log('it');
    this.storage.set('language', 'it');
    this.lang = this.it;
    //this.gameData.getLanguage();
  }
  setLanguageEn(){
    console.log('en');
    this.storage.set('language', 'en');
    this.lang = this.en;
  }
  setLanguageFur(){
    this.storage.set('language', 'fur');
    this.lang = this.fur;
  }

  goBack(){
    this.navCtrl.pop();
  }
  
  goHome(){
    this.navCtrl.push(HomePage);
  }
}
