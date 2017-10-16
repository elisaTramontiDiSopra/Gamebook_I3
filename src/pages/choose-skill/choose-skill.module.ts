import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ChooseSkillPage } from './choose-skill';

@NgModule({
  declarations: [
    ChooseSkillPage,
  ],
  imports: [
    IonicPageModule.forChild(ChooseSkillPage),
  ],
})
export class ChooseSkillPageModule {}
