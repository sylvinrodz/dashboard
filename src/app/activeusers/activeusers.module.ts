import { DataTablesModule } from 'angular-datatables';
import { NgxTweetModule } from 'ngx-tweet';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ActiveusersRoutingModule } from './activeusers-routing.module';
import { ActiveusersComponent } from './activeusers.component';
import { HttpClientModule } from '@angular/common/http';
import { NgxTwitterTimelineModule } from 'ngx-twitter-timeline';

@NgModule({
  declarations: [
    ActiveusersComponent
  ],
  imports: [
    CommonModule,
    ActiveusersRoutingModule,
    HttpClientModule,
    NgxTwitterTimelineModule,
    NgxTweetModule,
    DataTablesModule
  ]
})
export class ActiveusersModule { }
