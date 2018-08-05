import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MhsSoalPage } from './mhs-soal';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MhsSoalPage,
  ],
  imports: [
    IonicPageModule.forChild(MhsSoalPage),
    ComponentsModule
  ],
})
export class MhsSoalPageModule {}
