import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the AdminTokenLoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-token-login',
  templateUrl: 'admin-token-login.html',
})
export class AdminTokenLoginPage {
  tokenAdmin: string;
  token: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afs: AngularFirestore, public db: DatabaseProvider) {
    this.token = this.db.getDaftarToken().snapshotChanges().pipe(
      map(arr => arr.map(doc => {
        return { id: doc.payload.doc.id, ...doc.payload.doc.data() }
      }))
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminTokenLoginPage');
  }
  loginAdmin(token) {
    if (this.tokenAdmin === token) {
      this.navCtrl.push('AdminLoginPage');
    }
    else {
      alert('Token Salah');
    }

  }

}
