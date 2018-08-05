import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';

/**
 * Generated class for the FbLoginMhsComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'fb-login-mhs',
  templateUrl: 'fb-login-mhs.html'
})
export class FbLoginMhsComponent {

  text: string;

  constructor(public auth: AuthProvider, public navCtrl: NavController) {
    console.log('Hello FacebookLoginComponent Component');
    this.text = 'Hello World';
  }

  async login() {
    await this.auth.facebookMhsLogin();
    await this.navCtrl.setRoot(TabsPage);
  }

}
