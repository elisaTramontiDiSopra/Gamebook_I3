import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CreditsPage } from './credits';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CreditsPage,
  ],
  imports: [
    IonicPageModule.forChild(CreditsPage),
    ComponentsModule
  ],
})
export class CreditsPageModule {}
