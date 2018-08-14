import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthProvider } from '../../providers/auth/auth';
import { DatabaseProvider } from '../../providers/database/database';
import { AngularFirestore } from 'angularfire2/firestore';
/**
 * Generated class for the MhsSoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mhs-soal',
  templateUrl: 'mhs-soal.html',
})
export class MhsSoalPage implements OnInit {
  id: string;
  soal: Observable<any[]>;
  score = 0; // Jumlah benar
  nama: any; // Nama dosen
  judul: any; // Judul materi
  nilai: any; // Data yang dimasukkan ke database
  jumlah: any; // Jumlah soal
  hasil: any; // Nilai akhir
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DatabaseProvider, public auth: AuthProvider, private afs: AngularFirestore) {
    this.id = navParams.get('id');
    this.nama = navParams.get('nama');
    this.judul = navParams.get('judul');
  }
  ngOnInit() {
    this.soal = this.db.getDaftarSoal(this.id).snapshotChanges().pipe(
      map(arr =>
        arr.map(doc => {
          return { id: doc.payload.doc.id, ...doc.payload.doc.data() }
        })

      )
    )


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MhsSoalPage');
  }

  async hitungHasil(user, jumlah) {

    this.jumlah = jumlah;
    if (this.score > this.jumlah) {
      this.score = this.jumlah;
    }
    this.hasil = (this.score / this.jumlah) * 10;
    this.nilai = {
      uid: user.uid,
      score: this.hasil,
      judul: this.judul,
      nama: this.nama,
      materiId: this.id
    }
    await this.db.createNilai(this.nilai);
    await this.navCtrl.push('MhsHasilPage', {
      benar: this.score,
      hasil: this.hasil,
      judul: this.judul,
      nama: this.nama,
      materiId: this.id,
      jumlah: this.jumlah
    });
  }


  radioChecked(jawaban, jawabanBenar) {
    if (jawaban === jawabanBenar) {
      this.score += 1;
    }

  }

}
