import { Component } from '@angular/core';

import { AuthProvider } from '../../providers/auth/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab2Root = 'UsersPage';
  tab3Root = 'MatkulPage';
  tab4Root = 'ProfilePage';
  constructor(public auth: AuthProvider) {

  }
  ionViewCanEnter() {
    return this.auth.isLoggedIn();
  }
}
