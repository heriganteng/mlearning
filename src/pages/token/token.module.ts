import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TokenPage } from './token';
import { ComponentsModule } from '../../components/components.module';

@NgModule({
  declarations: [
    TokenPage,
  ],
  imports: [
    IonicPageModule.forChild(TokenPage),
    ComponentsModule
  ],
})
export class TokenPageModule {}
