import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';
import { TabsPage } from '../../pages/tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';

/**
 * Generated class for the AnonymousLoginComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'anonymous-login',
  templateUrl: 'anonymous-login.html'
})
export class AnonymousLoginComponent {

  text: string;

  constructor(public auth: AuthProvider, public navCtrl: NavController, public loadingCtrl: LoadingController) {
    console.log('Hello AnonymousLoginComponent Component');
    this.text = 'Hello World';
  }

  async login() {
    const loader = this.loadingCtrl.create({
      content: "Logging in anonymously..."
    })
    loader.present()
    
    // await this.auth.anonymousLogin();
    loader.dismiss()

    await this.navCtrl.setRoot(TabsPage);
  }

}
