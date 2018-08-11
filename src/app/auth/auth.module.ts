import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupPage } from './pages/signup/signup.page';
import { SigninPage } from './pages/signin/signin.page';
import { ConfirmPage } from './pages/confirm/confirm.page';
import { ResetPasswordPage } from './pages/reset-password/reset-password.page';

import { RequireGuard, ConfirmGuard } from './guard';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupPage,
    canActivate: [RequireGuard],
  },
  {
    path: 'signin',
    component: SigninPage,
    canActivate: [RequireGuard],
  },
  {
    path: 'confirm',
    component: ConfirmPage,
    canActivate: [ConfirmGuard],
  },
  {
    path: 'reset_password',
    component: ResetPasswordPage,
    canActivate: [RequireGuard],
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [SignupPage, SigninPage, ConfirmPage, ResetPasswordPage],
})
export class AuthPageModule {}
