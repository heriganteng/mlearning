import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminLoginPage } from './admin-login';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdminLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminLoginPage),
    ComponentsModule
  ],
})
export class AdminLoginPageModule {}
