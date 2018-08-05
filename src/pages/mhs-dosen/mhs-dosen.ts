import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { AuthProvider } from '../../providers/auth/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * Generated class for the MhsDosenPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mhs-dosen',
  templateUrl: 'mhs-dosen.html',
})
export class MhsDosenPage {
  dosen: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DatabaseProvider, public auth: AuthProvider) {
    this.dosen = this.db.getDaftarDosen().snapshotChanges().pipe(
      map(arr => arr.map(doc => {
        return { id: doc.payload.doc.id, ...doc.payload.doc.data() }
      }))
    )
  }
  openMateri(userId) {
    alert(userId);
    this.navCtrl.push('MhsListMateriDosenPage', {
      userId: userId
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MhsDosenPage');
  }

}
