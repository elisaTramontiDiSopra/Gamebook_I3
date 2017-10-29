import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RulesPage } from './rules';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    RulesPage,
  ],
  imports: [
    IonicPageModule.forChild(RulesPage),
    ComponentsModule
  ],
})
export class RulesPageModule {}
