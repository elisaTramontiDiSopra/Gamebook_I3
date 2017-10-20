import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LairPage } from './lair';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LairPage,
  ],
  imports: [
    IonicPageModule.forChild(LairPage),
    ComponentsModule,
  ],
})
export class LairPageModule {}
