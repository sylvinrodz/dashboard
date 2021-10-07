import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UploadedUserRoutingModule } from './uploaded-user-routing.module';
import { UploadedUserComponent } from './uploaded-user.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UploadedUserComponent
  ],
  imports: [
    CommonModule,
    UploadedUserRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class UploadedUserModule { }
