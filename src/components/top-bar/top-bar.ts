import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'top-bar',
  templateUrl: 'top-bar.html'
})
export class TopBarComponent {

  @Input() chapNum: number;
  //this.chapterNumber = this.chapNum;

  constructor(public navCtrl: NavController, public novParams: NavParams) {}

  goToCharacterPage(){
    this.navCtrl.push("CharacterPage");
  }

}
