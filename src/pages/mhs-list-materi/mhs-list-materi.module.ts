import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MhsListMateriPage } from './mhs-list-materi';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MhsListMateriPage,
  ],
  imports: [
    IonicPageModule.forChild(MhsListMateriPage),
    ComponentsModule
  ],
})
export class MhsListMateriPageModule {}
