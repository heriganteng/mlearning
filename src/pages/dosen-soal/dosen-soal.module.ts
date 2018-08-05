import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DosenSoalPage } from './dosen-soal';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DosenSoalPage,
  ],
  imports: [
    IonicPageModule.forChild(DosenSoalPage),
    ComponentsModule
  ],
})
export class DosenSoalPageModule {}
