import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { AuthProvider } from '../../providers/auth/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Generated class for the DosenSoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dosen-soal',
  templateUrl: 'dosen-soal.html',
})
export class DosenSoalPage {
  id: string;
  soal: Observable<any[]>;
  constructor(private db: DatabaseProvider, public auth: AuthProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.id = navParams.get('materiId');
    this.soal = this.db.getDaftarSoal(this.id).snapshotChanges().pipe(
      map(arr => arr.map(doc => {
        return { id: doc.payload.doc.id, ...doc.payload.doc.data() }
      }))
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DosenSoalPage');
  }
  tambahSoal() {
    this.navCtrl.push('DosenPostSoalPage', {
      materiId: this.id
    });
  }
  itemSelected() {

  }

}
