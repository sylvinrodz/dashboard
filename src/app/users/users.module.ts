import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import { UsersRoutingModule } from './users-routing.module';
import { UsersComponent } from './users.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    UsersComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    DataTablesModule,
    FormsModule
  ]
})
export class UsersModule { }
