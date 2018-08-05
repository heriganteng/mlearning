import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DosenPostSoalPage } from './dosen-post-soal';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DosenPostSoalPage,
  ],
  imports: [
    IonicPageModule.forChild(DosenPostSoalPage),
    ComponentsModule
  ],
})
export class DosenPostSoalPageModule {}
