import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.page.html',
  styleUrls: ['./reset-password.page.scss'],
})
export class ResetPasswordPage implements OnInit {
  email: string;
  loading = false;
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  sendResetPassword() {
    this.loading = true;
    this.auth.resetPassword(this.email).catch(error => (this.loading = false));
    this.loading = false;
  }
}
