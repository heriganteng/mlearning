import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DosenDaftarNilaiPage } from './dosen-daftar-nilai';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DosenDaftarNilaiPage,
  ],
  imports: [
    IonicPageModule.forChild(DosenDaftarNilaiPage),
    ComponentsModule
  ],
})
export class DosenDaftarNilaiPageModule {}
