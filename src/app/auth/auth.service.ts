import { Injectable } from '@angular/core';
import { AlertController, ToastController } from '@ionic/angular';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { User, auth } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth, public alertCtrl: AlertController, public toastCtrl: ToastController) {}

  getState(): Observable<User | null> {
    return this.afAuth.authState;
  }
  async signUp(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
      this.sendEmailVerification();
    } catch (e) {
      this.alertError(e);
      throw new Error(e);
    }
  }
  async signIn(email: string, password: string): Promise<void> {
    try {
      await this.afAuth.auth.signInWithEmailAndPassword(email, password);
    } catch (e) {
      this.alertError(e);
      throw new Error(e);
    }
  }
  async signOut(): Promise<void> {
    try {
      await this.afAuth.auth.signOut();
      const toast = await this.toastCtrl.create({
        message: 'Logout',
        duration: 2000,
      });
      toast.present();
    } catch (e) {
      this.alertError(e);
      throw new Error(e);
    }
  }
  async resetPassword(email: string): Promise<void> {
    try {
      await this.afAuth.auth.sendPasswordResetEmail(email);
      const toast = await this.toastCtrl.create({
        message: 'Send e-mail about how to reset passoword',
        duration: 2000,
      });
      toast.present();
    } catch (e) {
      this.alertError(e);
      throw new Error(e);
    }
  }
  async sendEmailVerification(): Promise<void> {
    try {
      const user = await this.afAuth.auth.currentUser;
      await user.sendEmailVerification();
      const toast = await this.toastCtrl.create({
        message: 'Send verify e-mail',
        duration: 2000,
      });
      toast.present();
    } catch (e) {
      this.alertError(e);
      throw new Error(e);
    }
  }
  private async alertError(e): Promise<void> {
    const alert = await this.alertCtrl.create({
      header: e.code,
      message: e.message,
      buttons: ['OK'],
    });
    await alert.present();
  }
}
