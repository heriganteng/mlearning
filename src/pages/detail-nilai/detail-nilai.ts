import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';

/**
 * Generated class for the DetailNilaiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-nilai',
  templateUrl: 'detail-nilai.html',
})
export class DetailNilaiPage {
  hasil: any;
  id: string;
  nilai: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DatabaseProvider, public afs: AngularFirestore) {
    this.id = navParams.get('id');
    alert(this.id);
    // var docRef = this.afs.collection("cities").doc("SF");

    // docRef.get().then(function (doc) {
    //   if (doc.exists) {
    //     console.log("Document data:", doc.data());
    //   } else {
    //     // doc.data() will be undefined in this case
    //     console.log("No such document!");
    //   }
    // }).catch(function (error) {
    //   console.log("Error getting document:", error);
    // });

    var docref = this.afs.collection('/nilais').doc(this.id);
    docref.ref.get()
      .then((doc) => {
        if (doc.exists) {
          // var invoice = doc.data();
          this.nilai = doc.data();
          console.log(JSON.stringify(this.nilai))
          //  <------WORKS
          // this.invoice = doc.data(); <------DOESN'T WORK
          console.log('Invoice data: ', doc.data());
        } else {
          console.error('No matching invoice found');
        }
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailNilaiPage');
  }
  ok() {
    this.navCtrl.pop();
  }

}
