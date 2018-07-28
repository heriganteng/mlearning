import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider } from '../../providers/database/database';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  users: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider,
    public db: DatabaseProvider) {
  }

  ionViewDidLoad() {
    this.users = this.db.getUsers();
  }

  trackByFn(index, user) {
    return user.uid; // or item.id
  }

}
