import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AddWikiComponent } from './add-wiki/add-wiki.component';
import { FormsModule} from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import { AngularFireModule} from 'angularfire2';
import { firebaseConfig } from './../environments/firebase.config';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { HomeComponent } from './home/home.component';
import { FirebaseService } from './service/firebase-service.service';

@NgModule({
  declarations: [
    AppComponent,
    AddWikiComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AppRoutingModule
  ],
  providers: [FirebaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
