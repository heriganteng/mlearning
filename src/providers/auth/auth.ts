import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFirestore, AngularFirestoreDocument } from 'angularfire2/firestore';
import * as firebase from "firebase/app";

import { Observable, Subject } from 'rxjs';
import { switchMap, take, first } from 'rxjs/operators';
import { Facebook } from '@ionic-native/facebook';
import { GooglePlus } from '@ionic-native/google-plus';
import { Platform } from '../../../node_modules/ionic-angular';


import 'rxjs/add/observable/of';

import * as Chance from 'chance';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {

  user: Observable<any>;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private facebook: Facebook,
    private platform: Platform,
    private gplus: GooglePlus,
  ) {
    this.user = this.afAuth.authState.pipe(
      switchMap(user => {
        if (user) {
          return this.afs.doc<any>(`users/${user.uid}`).valueChanges();
        } else {
          return Observable.of(null);
        }
      })
    );
  }

  //// Google Login ////

  async googleLogin() {
    if (this.platform.is("cordova")) {
      return await this.nativeGoogleLogin();
    } else {
      return await this.webGoogleLogin();
    }
  }

  async nativeGoogleLogin(): Promise<any> {
    try {

      const gplusUser = await this.gplus.login({
        'webClientId': '851406919101-5mldduilqhpst98qgtikqch1ubq5qttd.apps.googleusercontent.com',
        'offline': true,
        'scopes': 'profile email'
      })



      return await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))

      // const firebaseUserx = await firebase.auth().signInWithRedirect(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken));

      // const firebaseUser = await this.afAuth.auth.signInWithCredential(firebase.auth.GoogleAuthProvider.credential(gplusUser.idToken))

      // return await this.updateMhsData(firebaseUser);

    } catch (err) {
      console.log(err)
    }
  }

  async webGoogleLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.GoogleAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);
      return await this.updateMhsData(credential.user);

    } catch (err) {
      console.log(err)
    }

  }

  //// FACEBOOK MAHASISWA ////

  async facebookMhsLogin() {
    if (this.platform.is("cordova")) {
      return await this.nativeMhsFacebookLogin();
    } else {
      return await this.webMhsFacebookLogin();
    }
  }

  async nativeMhsFacebookLogin(): Promise<void> {
    try {
      const response = await this.facebook.login(["email", "public_profile"]);
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(
        response.authResponse.accessToken
      );

      const firebaseUser = await firebase
        .auth()
        .signInWithCredential(facebookCredential);

      return await this.updateMhsData(firebaseUser);
    } catch (err) {
      console.log(err);
    }
  }

  async webMhsFacebookLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

      return await this.updateMhsData(credential.user);
    } catch (err) {
      console.log(err);
    }
  }


  // Dosen
  async facebookLogin() {
    if (this.platform.is("cordova")) {
      return await this.nativeFacebookLogin();
    } else {
      return await this.webFacebookLogin();
    }
  }

  async facebookAdminLogin() {
    if (this.platform.is("cordova")) {
      return await this.nativeFacebookAdminLogin();
    } else {
      return await this.webFacebooAdminLogin();
    }
  }

  async nativeFacebookAdminLogin() {
    try {
      const response = await this.facebook.login(["email", "public_profile"]);
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(
        response.authResponse.accessToken
      );

      const firebaseUser = await firebase
        .auth()
        .signInWithCredential(facebookCredential);

      return await this.updateAdminData(firebaseUser);
    } catch (err) {
      console.log(err);
    }
  }
  async webFacebooAdminLogin() {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

      return await this.updateAdminData(credential.user);
    } catch (err) {
      console.log(err);
    }
  }



  async nativeFacebookLogin(): Promise<void> {
    try {
      const response = await this.facebook.login(["email", "public_profile"]);
      const facebookCredential = firebase.auth.FacebookAuthProvider.credential(
        response.authResponse.accessToken
      );

      const firebaseUser = await firebase
        .auth()
        .signInWithCredential(facebookCredential);

      return await this.updateDosenData(firebaseUser);
    } catch (err) {
      console.log(err);
    }
  }

  async webFacebookLogin(): Promise<void> {
    try {
      const provider = new firebase.auth.FacebookAuthProvider();
      const credential = await this.afAuth.auth.signInWithPopup(provider);

      return await this.updateDosenData(credential.user);
    } catch (err) {
      console.log(err);
    }
  }

  // Dosen //
  // Save custom user data in Firestore
  private updateDosenData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    const data = {
      uid: user.uid,
      email: user.email || null,
      level: 'dosen',
      displayName: user.displayName || new Chance().name({ prefix: true }),
      photoURL: user.photoURL || "https://goo.gl/7kz9qG"
    };
    return userRef.set(data, { merge: true });
  }

  // Admin //
  // Save custom user data in Firestore
  private updateAdminData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    const data = {
      uid: user.uid,
      email: user.email || null,
      level: 'admin',
      displayName: user.displayName || new Chance().name({ prefix: true }),
      photoURL: user.photoURL || "https://goo.gl/7kz9qG"
    };
    return userRef.set(data, { merge: true });
  }

  // Mahasiswa //
  // Save custom user data in Firestore
  private updateMhsData(user: any) {
    const userRef: AngularFirestoreDocument<any> = this.afs.doc(
      `users/${user.uid}`
    );

    const data = {
      uid: user.uid,
      email: user.email || null,
      level: 'mahasiswa',
      displayName: user.displayName || new Chance().name({ prefix: true }),
      photoURL: user.photoURL || "https://goo.gl/7kz9qG"
    };

    return userRef.set(data, { merge: true });
  }


  //// HELPERS ////

  async logout(): Promise<any> {
    return this.afAuth.auth.signOut();
  }

  // Current user as a Promise. Useful for one-off operations.
  async getCurrentUser(): Promise<any> {
    return this.user.pipe(first()).toPromise();
  }

  // Current user as boolean Promise. Used in router guards
  async isLoggedIn(): Promise<boolean> {
    const user = await this.getCurrentUser();
    return !!user;
  }
}
