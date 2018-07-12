import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {Routes, RouterModule} from '@angular/router';

import {Store} from 'store';

// feature modules
import {AuthModule} from "../auth/auth.module";
// containers
import {AppComponent} from './containers/app/app.component';

// components

// routes
export const ROUTES: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    AuthModule
  ],
  declarations: [
    AppComponent
  ],
  providers: [
    Store
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {
}

/**
 *
 *  var config = {
    apiKey: "AIzaSyAlf1hbk_WLtuchUPSLRgdLWdX9SwasxSs",
    authDomain: "ultimateproject-5811d.firebaseapp.com",
    databaseURL: "https://ultimateproject-5811d.firebaseio.com",
    projectId: "ultimateproject-5811d",
    storageBucket: "ultimateproject-5811d.appspot.com",
    messagingSenderId: "389432022506"
  };
 */
