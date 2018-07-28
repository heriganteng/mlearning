import { NgModule } from '@angular/core';
import { AnonymousLoginComponent } from './anonymous-login/anonymous-login';
import { CommonModule } from '../../node_modules/@angular/common';
import { IonicModule } from '../../node_modules/ionic-angular';
import { FacebookLoginComponent } from './facebook-login/facebook-login';
import { UserLogoutComponent } from './user-logout/user-logout';
import { PostMateriComponent } from './post-materi/post-materi';
import { HeartButtonComponent } from './heart-button/heart-button';
import { UserRelationshipComponent } from './user-relationship/user-relationship';
@NgModule({
	declarations: [AnonymousLoginComponent,
    FacebookLoginComponent,
    UserLogoutComponent,
    PostMateriComponent,
    HeartButtonComponent,
    HeartButtonComponent,
    UserRelationshipComponent],
	imports: [CommonModule,
    IonicModule],
	exports: [AnonymousLoginComponent,
    FacebookLoginComponent,
    UserLogoutComponent,
    PostMateriComponent,
    HeartButtonComponent,
    HeartButtonComponent,
    UserRelationshipComponent]
})
export class ComponentsModule {}
