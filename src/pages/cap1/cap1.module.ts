import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Cap1Page } from './cap1';
import { ComponentsModule } from '../../components/components.module';


@NgModule({
  declarations: [
    Cap1Page,
  ],
  imports: [
    IonicPageModule.forChild(Cap1Page),
    ComponentsModule,
  ],
})
export class Cap1PageModule {}
