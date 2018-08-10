import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: './home/home.module#HomePageModule' },
  { path: 'signup', loadChildren: './auth/signup/signup.module#SignupPageModule' },
  { path: 'signin', loadChildren: './auth/signin/signin.module#SigninPageModule' },
  { path: 'reset_password', loadChildren: './auth/reset-password/reset-password.module#ResetPasswordPageModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
