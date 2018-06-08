import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EasyDonateFooterComponent } from './components/easy-donate-footer/easy-donate-footer.component';
import { EasyDonateHeaderComponent } from './components/easy-donate-header/easy-donate-header.component';
import { EasyDonateLandingPageComponent } from './components/easy-donate-landing-page/easy-donate-landing-page.component';
import { EasyDonateLoginComponent } from './components/easy-donate-login/easy-donate-login.component';
import { EasyDonateRegisterComponent } from './components/easy-donate-register/easy-donate-register.component';
import { EasyDonateAppComponent } from './components/easy-donate-app/easy-donate-app.component';
import { EasyDonateProfileComponent } from './components/easy-donate-profile/easy-donate-profile.component';
import { EasyDonateHomeComponent } from './components/easy-donate-home/easy-donate-home.component';

import { RouteService } from './services/RouteService/route.service';
import { EasyDonateMyPostComponent } from './components/easy-donate-my-post/easy-donate-my-post.component';
import { EasyDonateAllPostsComponent } from './components/easy-donate-all-posts/easy-donate-all-posts.component';
import { PostService } from './services/PostService/post.service';

const appRoutes: Routes = [
  { path: '', component: EasyDonateLandingPageComponent, children: [
    { path: 'login/register', redirectTo: 'register', pathMatch: 'full'},
    { path: 'register/login', redirectTo: 'login', pathMatch: 'full'},
    { path: 'login', component: EasyDonateLoginComponent},
    { path: 'register', component: EasyDonateRegisterComponent}
  ]},
  { path: 'app', component: EasyDonateAppComponent }
  
];

@NgModule({
  declarations: [
    AppComponent,
    EasyDonateFooterComponent,
    EasyDonateHeaderComponent,
    EasyDonateLandingPageComponent,
    EasyDonateLoginComponent,
    EasyDonateRegisterComponent,
    EasyDonateAppComponent,
    EasyDonateProfileComponent,
    EasyDonateHomeComponent,
    EasyDonateMyPostComponent,
    EasyDonateAllPostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [RouteService, PostService],
  bootstrap: [AppComponent]
})
export class AppModule { }
