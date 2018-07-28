import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';

import * as firebase from 'firebase/app';

export interface Post {
  userId: string;
  createdAt: Date;
  materiUrl: string;
  content: string;
  likeCount: number;
  [key: string]: any;
}

/*
  Generated class for the DatabaseProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DatabaseProvider {

  private postsRef: AngularFirestoreCollection<Post>;


  constructor(public http: HttpClient, private afs: AngularFirestore) {
    console.log('Hello DatabaseProvider Provider');
    this.postsRef = this.afs.collection('posts');
  }

  // getRecentPost(){
  //   return this.afs.collection('posts', ref =>
  //   ref.orderBy('createdAt', 'desc')
  //   .limit(10)
  // )
  // }

  getRecentPosts() {
    return this.afs.collection<Post>('posts', ref =>
      ref.orderBy('createdAt', 'desc').limit(10)
    );
  }

  getUserPosts(userId: string) {
    return this.afs.collection('posts', ref =>
      ref.orderBy('createdAt', 'desc')
        .where('userId', '==', userId)
        .limit(10)
    )
  }

  createPost(userId: string, data: Post) {
    const createdAt = firebase.firestore.FieldValue.serverTimestamp();

    const doc = { userId, createdAt, ...data }

    return this.postsRef.add(doc);

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
