import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DatabaseProvider, Post } from '../../providers/database/database';
import { AuthProvider } from '../../providers/auth/auth';

import { File } from '@ionic-native/file';
import { FileChooser } from '@ionic-native/file-chooser';
import { FilePath } from '@ionic-native/file-path';
import firebase from 'firebase';
import { AngularFirestore } from 'angularfire2/firestore';
/**
 * Generated class for the DosenEditMateriPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-dosen-edit-materi',
  templateUrl: 'dosen-edit-materi.html',
})
export class DosenEditMateriPage {
  post = <any>{};
  id: string;
  content: any;
  materiUrl: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public db: DatabaseProvider, public auth: AuthProvider, public filePath: FilePath,
    public fileChooser: FileChooser, public file: File, public afs: AngularFirestore) {
    this.id = navParams.get('id');
    this.content = navParams.get('content');
    this.materiUrl = navParams.get('materiUrl');
  }
  async update(user) {
    this.post = {
      userId: user.uid,
      content: this.content,
      materiUrl: this.materiUrl

    }

    // this.afs.doc(`posts/${this.id}`).update({ post as Post });
    await this.db.updatePost(this.id, this.post as Post)
    await this.navCtrl.pop();
  }

  choose() {

    this.fileChooser.open().then((uri) => {

      this.filePath.resolveNativePath(uri)
        .then((filePath) => {
          this.file.resolveLocalFilesystemUrl(filePath).then((newUrl) => {
            alert(JSON.stringify(newUrl));

            let dirPath = newUrl.nativeURL;
            let dirPathSegments = dirPath.split('/');
            dirPathSegments.pop();
            dirPath = dirPathSegments.join('/');
            this.file.readAsArrayBuffer(dirPath, newUrl.name).then(async (buffer) => {
              await this.upload(buffer, newUrl.name);
            })
          })
        })
    })

  }
  async upload(buffer, name) {
    let blob = new Blob([buffer], { type: "application/pdf" });

    let storage = firebase.storage();

    storage.ref('files/' + name).put(blob).then((d) => {
      alert('Success');
      storage.ref('files/' + name).getDownloadURL().then((url) => {
        this.post.materiUrl = url;
      }).catch((error) => {
        alert(JSON.stringify(error));
      });
    }).catch((error => {
      alert(JSON.stringify(error));
    }))


  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad DosenEditMateriPage');
  }


}
