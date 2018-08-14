import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { AuthProvider } from '../../providers/auth/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
/**
 * Generated class for the AdminUsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-users',
  templateUrl: 'admin-users.html',
})
export class AdminUsersPage implements OnInit {
  users: Observable<any[]>;
  constructor(public navCtrl: NavController, public navParams: NavParams, private db: DatabaseProvider, public auth: AuthProvider, public alertCtrl: AlertController) {
  }
  ngOnInit() {
    this.users = this.db.getDaftarUser().snapshotChanges().pipe(
      map(arr => arr.map(doc => {
        return { id: doc.payload.doc.id, ...doc.payload.doc.data() }
      }))
    )
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminUsersPage');
  }
  // async hapus(id) {
  //   await this.db.deleteUsers(id);
  // }

  hapus(id) {
    const confirm = this.alertCtrl.create({
      title: 'Hapus User?',
      message: 'Apakah anda yakin akan menghapus user?',
      buttons: [
        {
          text: 'Batal',
          handler: () => {
            console.log('Disagree clicked');
          }
        },
        {
          text: 'Hapus',
          handler: () => {
            this.db.deleteUsers(id);
          }
        }
      ]
    });
    confirm.present();
  }

}
