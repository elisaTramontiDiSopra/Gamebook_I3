import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';

@Component({
  selector: 'top-bar',
  templateUrl: 'top-bar.html'
})
export class TopBarComponent {

  @Input() chapNum: number;
  @Input() currentPage: number;

  constructor(public navCtrl: NavController, public novParams: NavParams, public gameData:GameDataProvider) {
    this.gameData.getChapterTitleName();
  }

  goToCharacterPage(){
    this.navCtrl.push("CharacterPage");
  }

  backTo(page) {
    console.log("back to page");
    this.navCtrl.push(page);
  }

}
