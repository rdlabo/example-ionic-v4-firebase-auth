import { TestBed, async, inject } from '@angular/core/testing';

import { ConfirmGuard } from './confirm.guard';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../environments/environment';
import { RequireGuard } from '@/auth/guard/require.guard';
import { AuthService } from '@/auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

describe('ConfirmGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase)],
      providers: [
        RequireGuard,
        AuthService,
        AngularFireAuth,
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          },
        },
      ],
    });
  });

  it('should ...', inject([RequireGuard, AuthService, AngularFireAuth, AlertController], (guard: RequireGuard) => {
    expect(guard).toBeTruthy();
  }));
});
