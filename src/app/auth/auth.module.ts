import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SignupPage } from './signup/signup.page';
import { SigninPage } from './signin/signin.page';
import { ConfirmPage } from './confirm/confirm.page';
import { ResetPasswordPage } from './reset-password/reset-password.page';

const routes: Routes = [
  {
    path: 'signup',
    component: SignupPage,
  },
  {
    path: 'signin',
    component: SigninPage,
  },
  {
    path: 'confirm',
    component: ConfirmPage,
  },
  {
    path: 'reset_password',
    component: ResetPasswordPage,
  },
];

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, RouterModule.forChild(routes)],
  declarations: [SignupPage, SigninPage, ConfirmPage, ResetPasswordPage],
})
export class AuthPageModule {}