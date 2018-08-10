import { Component, OnInit } from '@angular/core';
import {AuthService} from '../auth.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  login: {
    email: string;
    password: string;
  } = {
    email: null,
    password: null
  };
  loading: boolean = false;
  constructor(public auth: AuthService) {}

  ngOnInit() {
    this.auth.getState().subscribe(
      data => {
        if (data && data.emailVerified) {
          // redirect after login
        } else if (data !== null) {
          // redirect cert page
        }
      }
    );
  }

  async doSingUp() {
    this.loading = true;
    const s = await this.auth.signUp(this.login.email, this.login.password).catch();
    this.loading = false;
  }
}
