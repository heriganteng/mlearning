import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginAwalPage } from './login-awal';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    LoginAwalPage,
  ],
  imports: [
    IonicPageModule.forChild(LoginAwalPage),
    ComponentsModule
  ],
})
export class LoginAwalPageModule {}
