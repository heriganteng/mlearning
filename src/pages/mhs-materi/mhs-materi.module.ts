import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MhsMateriPage } from './mhs-materi';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MhsMateriPage,
  ],
  imports: [
    IonicPageModule.forChild(MhsMateriPage),
    ComponentsModule
  ],
})
export class MhsMateriPageModule {}
