import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the MhsRatePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-mhs-rate',
  templateUrl: 'mhs-rate.html',
})
export class MhsRatePage {
  rating: any;
  id: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public afs: AngularFirestore) {
    this.id = navParams.get('id');

    // dapetin value dari sebelumnya terus hitung
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MhsRatePage');
  }
  rate() {
    const ref = this.afs.collection('posts').doc(this.id);
    ref.update({ rating: this.rating });
    this.navCtrl.setRoot('MhsMatkulPage');
  }
}
