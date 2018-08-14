import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
/**
 * Generated class for the AdminFbLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'admin-fb-login',
  templateUrl: 'admin-fb-login.html'
})
export class AdminFbLoginComponent {

  constructor(public auth: AuthProvider, public navCtrl: NavController) {
    console.log('Hello FacebookLoginComponent Component');
  }

  async login() {
    await this.auth.facebookAdminLogin();
    await this.navCtrl.setRoot(TabsPage);
  }
}
