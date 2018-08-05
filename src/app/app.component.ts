import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { AuthProvider } from '../providers/auth/auth';
import { LoginAwalPage } from '../pages/login-awal/login-awal';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = null;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, auth: AuthProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      auth.getCurrentUser()
        .then(user => {
          if (user) {
            this.rootPage = TabsPage
          } else {
            this.rootPage = LoginAwalPage
          }
          statusBar.styleDefault();
          splashScreen.hide();
        })
    });
  }
}
