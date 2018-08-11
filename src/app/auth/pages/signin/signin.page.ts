import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.page.html',
  styleUrls: ['./signin.page.scss'],
})
export class SigninPage implements OnInit {
  login: {
    email: string;
    password: string;
  } = {
    email: null,
    password: null,
  };
  loading: boolean = false;
  constructor(public auth: AuthService) {}

  ngOnInit() {}

  async doSingIn() {
    this.loading = true;
    const s = await this.auth.signIn(this.login.email, this.login.password).catch(e => console.log(e));
    if (s) {
    } // redirect
    this.loading = false;
  }
}
