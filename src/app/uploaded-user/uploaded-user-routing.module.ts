import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UploadedUserComponent } from './uploaded-user.component';

const routes: Routes = [{ path: '', component: UploadedUserComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UploadedUserRoutingModule { }
