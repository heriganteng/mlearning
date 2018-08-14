import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the LoginAwalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login-awal',
  templateUrl: 'login-awal.html',
})
export class LoginAwalPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  bukaTokenDosen() {
    this.navCtrl.push('DosenTokenPage');
  }
  bukaTokenMhs() {
    this.navCtrl.push('MhsTokenPage');
  }
  gotoTokenAdmin(){
    this.navCtrl.push('AdminTokenLoginPage');
  }
}
