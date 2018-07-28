import { Component, OnInit } from '@angular/core';
import { DatabaseProvider } from '../../providers/database/database';
import { Platform } from 'ionic-angular';

import { AuthProvider } from '../../providers/auth/auth';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { File } from '@ionic-native/file';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { FileOpener } from '@ionic-native/file-opener';

@Component({
  selector: 'post-materi',
  templateUrl: 'post-materi.html'
})
export class PostMateriComponent implements OnInit {

  text: string;
  posts: Observable<any[]>;

  constructor(private db: DatabaseProvider, public auth: AuthProvider, private file: File, private transfer: FileTransfer, private platform: Platform, private fileOpener: FileOpener) {
    console.log('Hello PostMateriComponent Component');
    this.text = 'Hello World';
  }
  ngOnInit() {
    this.posts = this.db.getRecentPosts().snapshotChanges().pipe(
      map(arr => arr.map(doc => {
        return { id: doc.payload.doc.id, ...doc.payload.doc.data() }
      }))
    )
  }

  trackByFn(index, post) {
    return post.id;
  }

  download(url, content) {
    // let path = null;

    // if (this.platform.is('ios')) {
    //   path = this.file.documentsDirectory;
    // } else if (this.platform.is('android')) {
    //   path = this.file.dataDirectory;
    // }
    // alert(path);

    // const transfer = this.transfer.create();
    // transfer.download(url, path + 'namafile.pdf').then(entry => {
    //   let url = entry.toURL();
    //   alert(url);
    //   this.document.viewDocument(url, 'application/pdf', {});
    // });
    // fileTransfer.(URL, cordova.file.dataDirectory + 'NAME').then((entry) => {
    //   console.log('download complete: ' + entry.toURL());
    // }, (error) => {
    //   // handle error
    // });
    // var options: DocumentViewerOptions = {
    //   title: 'My PDF',
    //   documentView: { closeLabel: '' },
    //   navigationView: { closeLabel: '' },
    //   email: { enabled: true },
    //   print: { enabled: true },
    //   openWith: { enabled: true },
    //   bookmarks: { enabled: false },
    //   search: { enabled: false },
    //   autoClose: { onPause: false }
    // }
    // const transfer = this.transfer.create();
    // transfer.download(url, cordova.cordova.file.externalRootDirectory + content + '.pdf').then(entry => {
    //   let url = entry.toURL();
    //   this.document.viewDocument(url, 'application/pdf', options);
    // }).catch((e) => {
    //   alert(JSON.stringify(e));
    // });

    const fileTransfer: FileTransferObject = this.transfer.create();
    alert(url);
    // const url = 'http://www.example.com/file.pdf';
    fileTransfer.download(url, this.file.dataDirectory + 'file.pdf').then((entry) => {
      alert('download complete: ' + entry.toURL());
      this.fileOpener.open(entry.toURL(), 'application/pdf')
        .then(() => console.log('File is opened'))
        .catch(e => console.log('Error opening file', e));
    }, (error) => {
      // handle error
      alert(JSON.stringify(error));
    });



  }

}
