import { Component } from '@angular/core';

/**
 * Generated class for the BackBarComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'back-bar',
  templateUrl: 'back-bar.html'
})
export class BackBarComponent {

  text: string;

  constructor() {
    console.log('Hello BackBarComponent Component');
    this.text = 'Hello World';
  }

}
