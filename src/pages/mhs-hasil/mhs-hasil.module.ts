import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MhsHasilPage } from './mhs-hasil';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MhsHasilPage,
  ],
  imports: [
    IonicPageModule.forChild(MhsHasilPage),
    ComponentsModule
  ],
})
export class MhsHasilPageModule {}
