import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the AdminTokenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-token',
  templateUrl: 'admin-token.html',
})
export class AdminTokenPage {
  token: Observable<any[]>;
  tokenMahasiswa: string;
  tokenDosen: string;
  tokenAdmin: string;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afs: AngularFirestore, public db: DatabaseProvider) {
    this.token = this.db.getDaftarToken().snapshotChanges().pipe(
      map(arr => arr.map(doc => {
        return { id: doc.payload.doc.id, ...doc.payload.doc.data() }
      }))
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminTokenPage');
  }

  updateTokenAdmin() {
    const ref = this.afs.collection('token').doc('token');

    ref.update({ admin: this.tokenAdmin })
    this.tokenAdmin = '';
  }
  updateTokenDosen() {
    const ref = this.afs.collection('token').doc('token');

    ref.update({ dosen: this.tokenDosen })
    this.tokenDosen = '';
  }
  updateTokenMahasiswa() {
    const ref = this.afs.collection('token').doc('token');

    ref.update({ mahasiswa: this.tokenMahasiswa });
    this.tokenMahasiswa = '';
  }

}
