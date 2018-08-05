import { Component } from '@angular/core';
import { AuthProvider } from '../../providers/auth/auth';
import { NavController } from 'ionic-angular';
import { LoginAwalPage } from '../../pages/login-awal/login-awal';

/**
 * Generated class for the UserLogoutComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-logout',
  templateUrl: 'user-logout.html'
})
export class UserLogoutComponent {

  text: string;

  constructor(public auth: AuthProvider, public navCtrl: NavController) {
    console.log('Hello UserLogoutComponent Component');
    this.text = 'Hello World';
  }
  async logout(){
    await this.auth.logout();
    await this.navCtrl.setRoot(LoginAwalPage);
  }

}
