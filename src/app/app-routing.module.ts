import { LoginGuardGuard } from './login-guard.guard';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) }, 
  { path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule),canActivate:[LoginGuardGuard] },
  { path: '',   redirectTo: '/login', pathMatch: 'full' },
  { path: 'users', loadChildren: () => import('./users/users.module').then(m => m.UsersModule) },
  { path: 'activeusers', loadChildren: () => import('./activeusers/activeusers.module').then(m => m.ActiveusersModule) },
  { path: 'questions', loadChildren: () => import('./questions/questions.module').then(m => m.QuestionsModule) },
  { path: 'uploadedUser', loadChildren: () => import('./uploaded-user/uploaded-user.module').then(m => m.UploadedUserModule) },
  { path: 'photos', loadChildren: () => import('./photos/photos.module').then(m => m.PhotosModule) },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,{ useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
