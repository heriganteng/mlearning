import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
})
export class ProfilePage {

  constructor(public auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewCanEnter() {
    return this.auth.getCurrentUser();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
  }

  openEditPage() {
    this.navCtrl.push('ProfileEditPage')
  }
  openNilaiPage(user){
    this.navCtrl.push('DaftarNilaiPage', {
      userId: user.uid
    });
  }
}
