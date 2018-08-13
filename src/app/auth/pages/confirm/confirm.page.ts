import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';
import { timer, Subscription} from 'rxjs';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit, OnDestroy {
  public timerSubscription: Subscription;
  constructor(public auth: AuthService, public router: Router) {}

  ngOnInit() {
    this.timerSubscription = timer(0, 1000).subscribe(() => {
      this.auth.getState(true).subscribe(data => {
        if (data && data.emailVerified) {
          this.router.navigate(['/']);
        }
      });
    });
  }

  ngOnDestroy() {
    this.timerSubscription.unsubscribe();
  }

  async sendVerify() {
    await this.auth.sendEmailVerification();
  }
}
