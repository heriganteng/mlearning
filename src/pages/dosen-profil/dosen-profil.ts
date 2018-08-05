import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the DosenProfilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dosen-profil',
  templateUrl: 'dosen-profil.html',
})
export class DosenProfilPage {

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
  openNilaiPage() {
    this.navCtrl.push('DosenDaftarNilaiPage');
  }

}
