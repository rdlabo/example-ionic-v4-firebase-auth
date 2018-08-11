import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { User, auth } from 'firebase';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(public afAuth: AngularFireAuth) {}

  getState(): Observable<User | null> {
    return this.afAuth.authState;
    // .pipe(
    //   map(data => {
    //     return (data.emailVerified) ? data : null;
    //   })
    // );
  }
  signUp(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return new Promise<any>(async (resolve, reject) => {
      await this.afAuth.auth.createUserWithEmailAndPassword(email, password).catch(error => reject(error));
      this.sendEmailVerification().then(data => resolve(data), error => reject(error));
    });
  }
  signIn(email: string, password: string): Promise<firebase.auth.UserCredential> {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signInWithEmailAndPassword(email, password).then(data => resolve(data), error => reject(error));
    });
  }
  signOut(): Promise<void> {
    return new Promise<any>((resolve, reject) => {
      this.afAuth.auth.signOut().then(data => resolve(data), error => reject(error));
    });
  }
  resetPassword(email: string): Promise<void> {
    return new Promise((resolve, reject) => {
      this.afAuth.auth.sendPasswordResetEmail(email).then(data => resolve(data), error => reject(error));
    });
  }
  async sendEmailVerification(): Promise<void> {
    const user = await this.afAuth.auth.currentUser;
    return user.sendEmailVerification();
  }
}
