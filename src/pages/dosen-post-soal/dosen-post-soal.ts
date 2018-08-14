import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { DatabaseProvider, Soal } from '../../providers/database/database';

/**
 * Generated class for the DosenPostSoalPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dosen-post-soal',
  templateUrl: 'dosen-post-soal.html',
})
export class DosenPostSoalPage {
  soal = <any>{};
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider, public db: DatabaseProvider) {
    this.soal.materiId = navParams.get('materiId');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DosenPostSoalPage');
  }
  async create(user) {
    await this.db.createSoal(user.uid, this.soal as Soal)
    this.soal = {}
    this.navCtrl.pop();
  }
}
