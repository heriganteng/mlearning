import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MhsLoginPage } from './mhs-login';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    MhsLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(MhsLoginPage),
    ComponentsModule
  ],
})
export class MhsLoginPageModule {}
