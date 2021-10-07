import { DataTablesModule } from 'angular-datatables';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { QuestionsRoutingModule } from './questions-routing.module';
import { QuestionsComponent } from './questions.component';


@NgModule({
  declarations: [
    QuestionsComponent
  ],
  imports: [
    CommonModule,
    QuestionsRoutingModule,
    DataTablesModule
  ]
})
export class QuestionsModule { }
