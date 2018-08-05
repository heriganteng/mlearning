import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

/**
 * Generated class for the DaftarNilaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-daftar-nilai',
  templateUrl: 'daftar-nilai.html',
})
export class DaftarNilaiPage {
  // items = [{ "nama": "Abdul Haris., S.Kom., M.Kom", "materi": "Looping", "nilai": 70 },
  // { "nama": "Abdurrasyid., S.Kom., MMSI", "materi": "Percabangan", "nilai": 95 },
  // { "nama": "Efy Yosrita., S.Si, M.Kom", "materi": "Struct", "nilai": 60 },
  // { "nama": "Luqman., ST., MKom", "materi": "Function", "nilai": 90 }
  // ];
  id: string;
  nilai: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DatabaseProvider) {
    this.id = navParams.get('userId');
    alert(this.id);
    this.nilai = this.db.getDaftarNilaiMhs(this.id).snapshotChanges().pipe(
      map(arr => arr.map(doc => {
        return { id: doc.payload.doc.id, ...doc.payload.doc.data() }
      }))
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DaftarNilaiPage');
  }
  itemSelected() {
    console.log("Selected Item");
  }

}
