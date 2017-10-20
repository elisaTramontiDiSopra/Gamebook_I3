import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CharacterPage } from './character';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    CharacterPage,
  ],
  imports: [
    IonicPageModule.forChild(CharacterPage),
    ComponentsModule,
  ],
})
export class CharacterPageModule {}
