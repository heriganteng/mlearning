import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MhsMatkulPage } from './mhs-matkul';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MhsMatkulPage,
  ],
  imports: [
    IonicPageModule.forChild(MhsMatkulPage),
    ComponentsModule
  ],
})
export class MhsMatkulPageModule {}
