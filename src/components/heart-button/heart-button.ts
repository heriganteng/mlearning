import { Component, Input } from '@angular/core';
import { DatabaseProvider } from '../../providers/database/database';
/**
 * Generated class for the HeartButtonComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'heart-button',
  templateUrl: 'heart-button.html'
})
export class HeartButtonComponent {

  text: string;

  @Input() userId: string;
  @Input() post: any;

  constructor(public db: DatabaseProvider) {
    console.log('Hello HeartButtonComponent Component');
    this.text = 'Hello World';
  }

  get heartCount(): number{
    return this.post.hearts ? Object.keys(this.post.hearts).length : 0
  }

  get isHearted(): boolean {
    return !!(this.post.hearts && this.post.hearts[this.userId])
  }

}
