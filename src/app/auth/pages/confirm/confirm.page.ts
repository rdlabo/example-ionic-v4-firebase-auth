import { Component, OnInit } from '@angular/core';
import { ToastController } from '@ionic/angular';
import { AuthService } from '../../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.page.html',
  styleUrls: ['./confirm.page.scss'],
})
export class ConfirmPage implements OnInit {
  constructor(public auth: AuthService, public toastCtrl: ToastController, public router: Router) {}

  ngOnInit() {
    this.auth.getState().subscribe(data => {
      if (data && data.emailVerified) {
        this.router.navigate(['/']);
      }
    });
  }

  async sendVerify() {
    await this.auth.sendEmailVerification();
    const toast = await this.toastCtrl.create({
      message: 'Send verify e-mail',
      duration: 2000,
    });
    toast.present();
  }
}
