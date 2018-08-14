import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';

/**
 * Generated class for the MhsHasilPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mhs-hasil',
  templateUrl: 'mhs-hasil.html',
})
export class MhsHasilPage implements OnInit {

  hasil: any;
  judul: any;
  id: any;
  nama: any;
  jumlah: any;
  benar: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DatabaseProvider) {
    this.hasil = navParams.get('hasil');
    this.nama = navParams.get('nama');
    this.id = navParams.get('id');
    this.judul = navParams.get('judul');
    this.jumlah = navParams.get('jumlah');
    this.benar = navParams.get('benar');
  }
  ngOnInit() {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MhsHasilPage');
  }
  ok() {
    this.navCtrl.setRoot('MhsMatkulPage');
  }
  rate() {
    this.navCtrl.push('MhsRatePage', {
      id: this.id
    });
  }

}
