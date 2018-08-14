import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the MatkulPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-matkul',
  templateUrl: 'matkul.html',
})
export class MatkulPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public auth: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MatkulPage');
  }

  listMateriAp1(userId: string){
    this.navCtrl.push('DosenListMateriPage', {
      matkul: 'ap1',
      userId: userId
    });
  }
  listMateriAp2(userId: string){
    this.navCtrl.push('DosenListMateriPage', {
      matkul: 'ap2',
      userId: userId
    });
  }

}
