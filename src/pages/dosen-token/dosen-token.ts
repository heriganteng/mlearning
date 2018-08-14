import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the DosenTokenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dosen-token',
  templateUrl: 'dosen-token.html',
})
export class DosenTokenPage {
  tokenDosen: string;
  token: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afs: AngularFirestore, public db: DatabaseProvider) {
    this.token = this.db.getDaftarToken().snapshotChanges().pipe(
      map(arr => arr.map(doc => {
        return { id: doc.payload.doc.id, ...doc.payload.doc.data() }
      }))
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DosenTokenPage');
  }
  loginDosen(token) {
    if (this.tokenDosen === token) {
      this.navCtrl.push('DosenLoginPage');
    }
    else {
      alert('Token Salah');
    }

  }
}
