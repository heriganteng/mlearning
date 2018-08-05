import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MhsMatkulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mhs-matkul',
  templateUrl: 'mhs-matkul.html',
})
export class MhsMatkulPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MhsMatkulPage');
  }
  listMateri() {
    this.navCtrl.push('MhsListMateriPage');
  }

}
