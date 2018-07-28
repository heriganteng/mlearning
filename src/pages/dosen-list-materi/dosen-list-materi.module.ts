import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DosenListMateriPage } from './dosen-list-materi';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DosenListMateriPage,
  ],
  imports: [
    IonicPageModule.forChild(DosenListMateriPage),
    ComponentsModule
  ],
})
export class DosenListMateriPageModule {}
