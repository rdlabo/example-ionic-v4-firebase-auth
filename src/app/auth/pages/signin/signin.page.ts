import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

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
  constructor(public auth: AuthService, public router: Router, public navCtrl: NavController) {}

  ngOnInit() {
    this.auth.getState().subscribe(data => {
      if (data && data.emailVerified) {
        this.router.navigate(['/']);
      } else if (data !== null) {
        this.router.navigate(['/auth/confirm']);
      }
    });
  }

  async doSingIn() {
    this.loading = true;
    await this.auth.signIn(this.login.email, this.login.password).catch(error => (this.loading = false));
  }
}
