import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DaftarNilaiPage } from './daftar-nilai';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DaftarNilaiPage,
  ],
  imports: [
    IonicPageModule.forChild(DaftarNilaiPage),
    ComponentsModule
  ],
})
export class DaftarNilaiPageModule {}
