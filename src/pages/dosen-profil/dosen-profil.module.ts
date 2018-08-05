import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DosenProfilPage } from './dosen-profil';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DosenProfilPage,
  ],
  imports: [
    IonicPageModule.forChild(DosenProfilPage),
    ComponentsModule
  ],
})
export class DosenProfilPageModule {}
