import { Component } from '@angular/core';
import { AuthService } from '@/auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  loading: boolean = false;
  constructor(public auth: AuthService, public router: Router) {}
  async doLogout() {
    this.loading = true;
    this.auth
      .signOut()
      .then(data => {
        this.router.navigate(['/auth/signup']);
      })
      .catch(error => (this.loading = false));
  }
}
