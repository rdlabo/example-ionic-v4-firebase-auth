import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../auth.service';

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
    password: null,
  };
  loading: boolean = false;
  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit() {
    this.auth.getState().subscribe(data => {
      if (data && data.emailVerified) {
        this.router.navigate(['/']);
      } else if (data !== null) {
        this.router.navigate(['/auth/confirm']);
      }
    });
  }

  async doSingUp() {
    this.loading = true;
    this.auth.signUp(this.login.email, this.login.password).catch(error => (this.loading = false));
  }
}
