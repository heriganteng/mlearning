import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MhsListMateriDosenPage } from './mhs-list-materi-dosen';

@NgModule({
  declarations: [
    MhsListMateriDosenPage,
  ],
  imports: [
    IonicPageModule.forChild(MhsListMateriDosenPage),
  ],
})
export class MhsListMateriDosenPageModule {}
