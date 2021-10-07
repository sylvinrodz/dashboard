import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SideNavComponent } from './side-nav/side-nav.component';
import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { GoogleChartsModule } from 'angular-google-charts';
import { DataTablesModule } from "angular-datatables";
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';
import { NgxTweetModule } from "ngx-tweet";
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import {AngularFireStorageModule, BUCKET } from '@angular/fire/storage';

@NgModule({
  declarations: [
    AppComponent,
    SideNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFirestoreModule,
    GoogleChartsModule,
    DataTablesModule,
    NgxTwitterTimelineModule,
    NgxTweetModule,
    AngularFireModule.initializeApp(environment.firebase),
    NoopAnimationsModule,
    MatTableModule,
    AngularFireStorageModule
  ],
  providers: [
    { provide: BUCKET, useValue: 'gs://kennametal-c668a.appspot.com' }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
