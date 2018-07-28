import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MatkulPage } from './matkul';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MatkulPage,
  ],
  imports: [
    IonicPageModule.forChild(MatkulPage),
    ComponentsModule
  ],
})
export class MatkulPageModule {}
