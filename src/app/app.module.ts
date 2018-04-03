import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';


export const firebaseConfig = {
  apiKey: "AIzaSyAyRgtI00Wk_jP-PdCZuQ4KJKB2whW7VrI",
    authDomain: "chatapp-bccd2.firebaseapp.com",
    databaseURL: "https://chatapp-bccd2.firebaseio.com",
    projectId: "chatapp-bccd2",
    storageBucket: "chatapp-bccd2.appspot.com",
    messagingSenderId: "1047548608849"
};


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
