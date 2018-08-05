import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MhsDosenPage } from './mhs-dosen';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MhsDosenPage,
  ],
  imports: [
    IonicPageModule.forChild(MhsDosenPage),
    ComponentsModule
  ],
})
export class MhsDosenPageModule {}
