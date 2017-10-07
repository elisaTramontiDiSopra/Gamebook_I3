import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseCharacterPage } from './choose-character';

@NgModule({
  declarations: [
    ChooseCharacterPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseCharacterPage),
  ],
})
export class ChooseCharacterPageModule {}
