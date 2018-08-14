import { NgModule } from '@angular/core';
import { AnonymousLoginComponent } from './anonymous-login/anonymous-login';
import { CommonModule } from '../../node_modules/@angular/common';
import { IonicModule } from '../../node_modules/ionic-angular';
import { FacebookLoginComponent } from './facebook-login/facebook-login';
import { UserLogoutComponent } from './user-logout/user-logout';
import { PostMateriComponent } from './post-materi/post-materi';
import { HeartButtonComponent } from './heart-button/heart-button';
import { UserRelationshipComponent } from './user-relationship/user-relationship';
import { GoogleLoginComponent } from './google-login/google-login';
import { MhsMateriComponent } from './mhs-materi/mhs-materi';
import { FbLoginMhsComponent } from './fb-login-mhs/fb-login-mhs';
import { MhsGoogleLoginComponent } from './mhs-google-login/mhs-google-login';
import { AdminFbLoginComponent } from './admin-fb-login/admin-fb-login';
@NgModule({
	declarations: [AnonymousLoginComponent,
    FacebookLoginComponent,
    UserLogoutComponent,
    PostMateriComponent,
    HeartButtonComponent,
    HeartButtonComponent,
    UserRelationshipComponent,
    GoogleLoginComponent,
    MhsMateriComponent,
    FbLoginMhsComponent,
    MhsGoogleLoginComponent,
    AdminFbLoginComponent],
	imports: [CommonModule,
    IonicModule],
	exports: [AnonymousLoginComponent,
    FacebookLoginComponent,
    UserLogoutComponent,
    PostMateriComponent,
    HeartButtonComponent,
    HeartButtonComponent,
    UserRelationshipComponent,
    GoogleLoginComponent,
    MhsMateriComponent,
    FbLoginMhsComponent,
    MhsGoogleLoginComponent,
    AdminFbLoginComponent]
})
export class ComponentsModule {}
