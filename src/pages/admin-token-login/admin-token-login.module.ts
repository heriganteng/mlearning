import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminTokenLoginPage } from './admin-token-login';

@NgModule({
  declarations: [
    AdminTokenLoginPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminTokenLoginPage),
  ],
})
export class AdminTokenLoginPageModule {}
