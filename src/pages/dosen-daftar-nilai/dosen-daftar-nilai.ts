import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { AuthProvider } from '../../providers/auth/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * Generated class for the DosenDaftarNilaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dosen-daftar-nilai',
  templateUrl: 'dosen-daftar-nilai.html',
})
export class DosenDaftarNilaiPage {
  items = [{ "nama": "Shinta MK Rotinsulu", "materi": "Looping", "nilai": 70 },
  { "nama": "Eka Haryanti", "materi": "Percabangan", "nilai": 95 },
  { "nama": "Arda Nadia", "materi": "Struct", "nilai": 60 },
  { "nama": "Rika Puji A", "materi": "Function", "nilai": 90 }
  ];
  nilai: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DatabaseProvider, public auth: AuthProvider) {
    this.nilai = this.db.getDaftarNilaiDosen().snapshotChanges().pipe(
      map(arr => arr.map(doc => {
        return { id: doc.payload.doc.id, ...doc.payload.doc.data() }
      }))
    )
  }

  ionViewDidLoad() {
    // console.log(JSON.stringify(this.nilai));
  }

}
