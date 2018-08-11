import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import {AuthService} from './../auth.service';

@Injectable({
  providedIn: 'root'
})
export class ConfirmGuard implements CanActivate {
  constructor(private auth: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> {

    return this.auth.getState()
      .pipe(
        map(data => {
          if (data !== null && !data.emailVerified) {
            return true;
          } else {
            this.router.navigate(['/auth/singin']);
            return null;
          }
        })
      );
  }

}
