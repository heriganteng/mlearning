import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DosenLoginPage } from './dosen-login';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    DosenLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(DosenLoginPage),
    ComponentsModule
  ],
})
export class DosenLoginPageModule {}
