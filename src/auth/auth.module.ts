import {NgModule} from '@angular/core';
import {CommonModule} from "@angular/common";
import {RouterModule, Routes} from "@angular/router";

// 3rd party modules
import {AngularFireModule, FirebaseAppConfig} from "angularfire2";
import {AngularFireAuthModule} from "angularfire2/auth";
import {AngularFireDatabaseModule} from "angularfire2/database";

// shared modules
import {SharedModule} from "./shared/shared.module";

export const ROUTES: Routes = [
  {
    path: 'auth',
    children: [
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'login'
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: 'register',
        loadChildren: './register/register.module#RegisterModule'
      },
    ]
  }
];

export const firebaseConfig: FirebaseAppConfig = {
  apiKey: "AIzaSyAyc8tEHIF5mTwulVHI5VXtIqU3BSq0S8I",
  authDomain: "angular-workout-app.firebaseapp.com",
  databaseURL: "https://angular-workout-app.firebaseio.com",
  projectId: "angular-workout-app",
  storageBucket: "angular-workout-app.appspot.com",
  messagingSenderId: "991119007519"
};

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ROUTES),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    SharedModule.forRoot()
  ]
})
export class AuthModule {
}
