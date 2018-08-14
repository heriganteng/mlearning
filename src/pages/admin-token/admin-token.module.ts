import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdminTokenPage } from './admin-token';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    AdminTokenPage,
  ],
  imports: [
    IonicPageModule.forChild(AdminTokenPage),
    ComponentsModule
  ],
})
export class AdminTokenPageModule {}
