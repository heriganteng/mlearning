import { Component } from '@angular/core';
import * as firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
import { Observable } from 'rxjs/Observable';

import { GooglePlus } from '@ionic-native/google-plus';
import { Platform, NavController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
/**
 * Generated class for the MhsGoogleLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'mhs-google-login',
  templateUrl: 'mhs-google-login.html'
})
export class MhsGoogleLoginComponent {

  user: Observable<firebase.User>;

  constructor(private afAuth: AngularFireAuth,
    private gplus: GooglePlus,
    private platform: Platform, public navCtrl: NavController) {

    this.user = this.afAuth.authState;

  }

  async googleLogin() {
    if (this.platform.is('cordova')) {
      await this.nativeGoogleLogin();
      await this.navCtrl.setRoot(TabsPage);
    } else {
      await this.webGoogleLogin();
      await this.navCtrl.setRoot(TabsPage);
    }
  }

  signOut() {
    this.afAuth.auth.signOut();
  }

  async nativeGoogleLogin(): Promise<any> {
    try {

      const gplusUser = await this.gplus.login({
        'webClientId': '851406919101-5mldduilqhpst98qgtikqch1ubq5qttd.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })

      return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))

    } catch (err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      await this.afAuth.auth.signInWithPopup(provider);

    } catch (err) {
      console.log(err)
    }

  }

}
