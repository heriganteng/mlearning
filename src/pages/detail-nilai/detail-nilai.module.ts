import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailNilaiPage } from './detail-nilai';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DetailNilaiPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailNilaiPage),
    ComponentsModule
  ],
})
export class DetailNilaiPageModule {}
