import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ComponentsModule } from '../components/components.module';
import { AuthProvider } from '../providers/auth/auth';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { Firebase } from '@ionic-native/firebase';
import { HttpClientModule } from '@angular/common/http';
import { Facebook } from '@ionic-native/facebook';
import { DatabaseProvider } from '../providers/database/database';
const firebase = {
  apiKey: "AIzaSyCXcIUdgDOhNfZIg19ze5zcpB6PocCvmuQ",
  authDomain: "ionic-firestarter-ab837.firebaseapp.com",
  databaseURL: "https://ionic-firestarter-ab837.firebaseio.com",
  projectId: "ionic-firestarter-ab837",
  storageBucket: "ionic-firestarter-ab837.appspot.com",
  messagingSenderId: "851406919101"
}
import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import { FileTransfer } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';
@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    LoginPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    ComponentsModule,
    AngularFireModule.initializeApp(firebase),
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireAuthModule,
    HttpClientModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Firebase,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    AuthProvider,
    Facebook,
    DatabaseProvider,
    File,
    FileChooser,
    FilePath,
    FileTransfer,
    FileOpener
  ]
})
export class AppModule { }
