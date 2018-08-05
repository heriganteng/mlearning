import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

/**
 * Generated class for the FacebookLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'facebook-login',
  templateUrl: 'facebook-login.html'
})
export class FacebookLoginComponent {

  constructor(public auth: AuthProvider, public navCtrl: NavController) {
    console.log('Hello FacebookLoginComponent Component');
  }

  async login() {
    await this.auth.facebookLogin();
    await this.navCtrl.setRoot(TabsPage);
  }

}
