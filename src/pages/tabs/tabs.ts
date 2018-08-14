import { Component } from '@angular/core';

import { AuthProvider } from '../../providers/auth/auth';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = 'HomePage';
  tab3Root = 'MatkulPage';
  tab4Root = 'DosenProfilPage';

  tab5Root = 'HomePage';
  tab6Root = 'MhsDosenPage';
  tab7Root = 'MhsMatkulPage';
  tab8Root = 'ProfilePage';

  tab9Root = 'HomePage';
  tab10Root = 'AdminUsersPage';
  tab11Root = 'AdminProfilePage';
  tab13Root = 'AdminTokenPage';


  constructor(public auth: AuthProvider) {

  }
  ionViewCanEnter() {
    return this.auth.isLoggedIn();
  }
}
