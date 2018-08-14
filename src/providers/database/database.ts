import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';

import * as firebase from 'firebase/app';

export interface Post {
  userId: string;
  nama: string;
  createdAt: Date;
  materiUrl: string;
  content: string;
  likeCount: number;
  matkul: string;
  [key: string]: any;
}
export interface Soal {
  userId: string;
  materiId: string;
  createdAt: Date;
  soal: string;
  jawabanA: string;
  jawabanB: string;
  jawabanC: string;
  jawabanD: string;
  jawabanBenar: string;
}
/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private postsRef: AngularFirestoreCollection<Post>;
  private soalsRef: AngularFirestoreCollection<Soal>;
  private nilaisRef: AngularFirestoreCollection<any>;


  constructor(public http: HttpClient, private afs: AngularFirestore) {
    console.log('Hello DatabaseProvider Provider');
    this.postsRef = this.afs.collection('posts');
    this.soalsRef = this.afs.collection('soals');
    this.nilaisRef = this.afs.collection('nilais');
  }

  // getRecentPost(){
  //   return this.afs.collection('posts', ref =>
  //   ref.orderBy('createdAt', 'desc')
  //   .limit(10)
  // )
  // }

  getRecentPosts(matkul: string) {
    return this.afs.collection<Post>('posts', ref =>
      ref.where("matkul", "==", matkul)
    );
  }
  getRecentPostsDosen(matkul: string, userId: string) {
    return this.afs.collection<Post>('posts', ref =>
      ref.where("matkul", "==", matkul).where("userId", "==", userId)
    );
  }

  getUserPosts(userId: string) {
    return this.afs.collection('posts', ref =>
      ref.orderBy('createdAt', 'desc')
        .where('userId', '==', userId)
        .limit(10)
    )
  }

  createPost(ref: string, data: Post) {
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();

    const doc = { createdAt, ...data }

    return this.postsRef.add(doc);

  }

  getDetailNilai(id: string) {
    return this.afs.collection('nilais').doc(id);
  }

  createNilai(data: any) {
    return this.nilaisRef.add(data);
  }
  updatePost(id: string, data: Post) {
    const updatedAt = firebase.firestore.FieldValue.serverTimestamp();

    // const doc = { updatedAt, ...data }

    // return this.postsRef.doc(id).set(doc);
    return this.afs.doc(`posts/${id}`).set({ updatedAt, ...data }, { merge: true });
  }
  deletePost(id: string) {
    return this.afs.doc(`posts/${id}`).delete();
  }

  deleteUsers(id: string) {
    return this.afs.doc(`users/${id}`).delete();
  }

  createSoal(userId: string, data: Soal) {
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();

    const doc = { userId, createdAt, ...data }

    return this.soalsRef.add(doc);

  }
  getDaftarSoal(id: string) {
    return this.afs.collection('soals', ref =>
      ref.where('materiId', '==', id)
    )
  }
  getJumlahSoal(materiId: string) {
    return this.afs.collection('soals', ref =>
      ref.where('materiId', '==', materiId)
    )
  }

  //// Dosen Daftar Nilai ////
  getDaftarNilaiDosen() {
    return this.afs.collection<any>('nilais', ref =>
      ref.orderBy('createdAt', 'desc')
    );
  }
  //// End Dosen Daftar Nilai ////

  // Admin
  getDaftarUser() {
    return this.afs.collection<any>('users');
  }
  getDaftarToken() {
    return this.afs.collection<any>('token');
  }

  //// Mahasiswa ///

  getDaftarDosen() {
    return this.afs.collection<any>('users', ref =>
      ref.where("level", "==", "dosen")
    );
  }
  getDaftarMateriDosen(uid) {
    return this.afs.collection<any>('posts', ref =>
      ref.where("userId", "==", uid)
    );
  }

  getDaftarNilaiMhs(uid) {
    return this.afs.collection<any>('nilais', ref =>
      ref.where("uid", "==", uid)
    );
  }

  //// HEARTS ////

  createHeart(userId: string, post: Post) {
    const hearts = post.hearts || {};
    hearts[userId] = true;

    return this.afs.doc(`posts/${post.id}`).update({ hearts });
  }

  removeHeart(userId: string, post: Post) {
    const hearts = post.hearts;
    delete post.hearts[userId];

    return this.afs.doc(`posts/${post.id}`).update({ hearts });
  }

  //// RELATIONSHIPS ////

  getUsers() {
    return this.afs.collection('users', ref => ref.limit(10)).valueChanges();
  }


  follow(followerId: string, followedId: string) {
    const docId = this.concatIds(followerId, followedId);
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();

    const data = {
      followerId,
      followedId,
      createdAt
    };

    return this.afs
      .collection('relationships')
      .doc(docId)
      .set(data);
  }

  unfollow(followerId: string, followedId: string) {
    const docId = this.concatIds(followerId, followedId);

    return this.afs
      .collection('relationships')
      .doc(docId)
      .delete();
  }

  isFollowing(followerId: string, followedId: string) {
    const docId = this.concatIds(followerId, followedId);

    return this.afs
      .collection('relationships')
      .doc(docId)
      .valueChanges();
  }
  // Helper to format the docId for relationships
  private concatIds(a: string, b: string) {
    return `${a}_${b}`;
  }

}
