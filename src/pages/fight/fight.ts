import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GameDataProvider } from '../../providers/game-data/game-data';



@IonicPage()
@Component({
  selector: 'page-fight',
  templateUrl: 'fight.html',
})
export class FightPage {
  currentPage = "fight";

  //PARAMS
  public characterLife: any;
  public fightParams: any;
  public enemyName; enemyAttack; enemyLife; winChapter; loseChapter; enemySrc: any;
  public winTitle; winText; loseTitle; loseText: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, private gameData: GameDataProvider) {
    this.fightParams = navParams.get('fightParams');
    this.charDiceOne = "-";
    this.charDiceTwo = "-";
    this.enemyDiceOne = "-";
    this.enemyDiceTwo = "-";
    console.log(this.fightParams);
    this.gameData.getLabelsName();
  }

  ionViewDidLoad() {
    //this.gameData.getLabelsName();
    this.gameData.getSkillsStats();
    /* enemyName | enemyLife | enemyAttack | winChapter | loseChapter */
    this.characterLife = this.gameData.lifeValue;
    this.enemyName = this.fightParams[0];
    this.enemyLife = this.fightParams[1];
    this.enemyAttack = this.fightParams[2];
    this.winChapter = this.fightParams[3];
    this.loseChapter = this.fightParams[4];
    this.enemySrc = this.enemySrc = "../assets/img/charReady/" + this.enemyName +'.png'
  }


  goToWinAlertPage(winChapter: any){
    this.navCtrl.push("WinAlertPage", {
      goToThisChapter: winChapter
    });
  };

  goToLoseAlertPage(loseChapter: any){
    this.navCtrl.push("LoseAlertPage", {
      //goToThisChapter: loseChapter
    });
  };

  throwTwoDices(){
    var firstDice: number = Math.floor(Math.random() * 6 + 1);
    var secondDice: number = Math.floor(Math.random() * 6 + 1);
    var attack: number = firstDice + secondDice;
    //console.log("throwTwoDices "+attack);
    return attack
  }

  throwDice(){
    var dice: number = Math.floor(Math.random() * 6 + 1);
    return dice
  }

  public message: any;
  public charDiceOne: any;
  public charDiceTwo: any;
  public enemyDiceOne: any;
  public enemyDiceTwo: any;
  public attackMessage: any;
  public damageMessage: any;

  fight() {
    //reset messaggi
    this.attackMessage = "";
    this.damageMessage = "";

    this.charDiceOne = this.throwDice();
    this.charDiceTwo = this.throwDice();

    var characterDices: number = +this.charDiceOne + +this.charDiceTwo;
    var characterFightAttack: number = characterDices + this.gameData.attackValue;
    console.log("characterFightAttack: "+characterFightAttack);

    this.enemyDiceOne = this.throwDice();
    this.enemyDiceTwo = this.throwDice();
    var enemyDices: number = +this.enemyDiceOne + +this.enemyDiceTwo;

    var enemyFightAttack: number = enemyDices + this.enemyAttack;
    console.log("enemyFightAttack: "+enemyFightAttack);
    //this.gameDatafightMsg sono le scritte del messaggio
    this.message = this.gameData.fightMsg1 + characterFightAttack + this.gameData.fightMsg2 + enemyFightAttack;
    console.log(this.message);

    if (characterFightAttack > enemyFightAttack) {
      //console.log('attacca');
        var damage: number = characterFightAttack - enemyFightAttack;
        console.log("damage" + damage);
        this.enemyLife = this.enemyLife - damage;
        this.attackMessage = damage+this.gameData.fightMsg3;
        //console.log(this.attackMessage);
        //this.message = this.message + " Infliggi un danno di " + damage + " punti."
        //this.presentAlert(message);
        if (this.enemyLife <=0) {
          this.goToWinAlertPage(this.winChapter);
          //this.youWinAlert(this.winChapter, this.winTitle, this.winText);
        }
      } if (characterFightAttack < enemyFightAttack) {
        console.log('subisci');
        var damage: number = enemyFightAttack - characterFightAttack;
        this.characterLife = this.gameData.lifeValue - damage;
        this.damageMessage = damage+this.gameData.fightMsg4;
        //this.message = this.message + " Subisci un danno di " + damage + " punti."
        //this.presentAlert(message);
        if (this.characterLife <=0) {
          //this.goToLoseAlertPage(this.loseChapter);
          //this.youLoseAlert();
        }
      } else {
        console.log("pareggio");
      }
  }


}
