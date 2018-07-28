import { Component, Input, OnInit } from '@angular/core';
import { DatabaseProvider } from '../../providers/database/database';


/**
 * Generated class for the UserRelationshipComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'user-relationship',
  templateUrl: 'user-relationship.html'
})
export class UserRelationshipComponent {

  text: string;
  @Input() currentUserId;
  @Input() followId;

  isOwner: boolean;
  isFollowing: any;


  constructor(public db: DatabaseProvider) {
    console.log('Hello UserRelationshipComponent Component');
    this.text = 'Hello World';
  }

  ngOnInit() {
    this.isOwner = this.currentUserId === this.followId;
    this.isFollowing = this.db.isFollowing(this.currentUserId, this.followId);
  }

}
