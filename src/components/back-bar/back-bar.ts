import { Component, Input } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'back-bar',
  templateUrl: 'back-bar.html'
})

export class BackBarComponent {

  @Input() currentPage: any;
  backImg; bookImg: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    //this.currentPage = this.navParams.get("currentPage");
    console.log(this.currentPage);
    //this.checkPage();
  }

  ionViewDidLoad() {
    this.checkPage();
  }

  checkPage(){
    console.log("IVDL check currentPage "+this.currentPage);
    if (this.currentPage == "inventory") {
      this.backImg = true;
      this.bookImg = false;
    } else if (this.currentPage == "character") {
      this.backImg = false;
      this.bookImg = true;
    } else {
      console.log('clicked back');
      this.backImg = false;
      this.bookImg = true;
    }
  }


  popBack() {
    console.log("pop back");
    this.navCtrl.pop();
  }

    back(page) {
      console.log("back to page");
      this.navCtrl.push(page);
    }



  }
