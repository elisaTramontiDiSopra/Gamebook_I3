import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LanguageAlertPage } from './language-alert';

@NgModule({
  declarations: [
    LanguageAlertPage,
  ],
  imports: [
    IonicPageModule.forChild(LanguageAlertPage),
  ],
})
export class LanguageAlertPageModule {}
