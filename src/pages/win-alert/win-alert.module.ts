import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WinAlertPage } from './win-alert';

@NgModule({
  declarations: [
    WinAlertPage,
  ],
  imports: [
    IonicPageModule.forChild(WinAlertPage),
  ],
})
export class WinAlertPageModule {}
