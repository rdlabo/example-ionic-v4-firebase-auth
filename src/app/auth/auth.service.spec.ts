import { TestBed, inject } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment';
import { AlertController, IonicModule } from '@ionic/angular';

describe('AuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase)],
      providers: [AuthService, AngularFireAuth],
    });
  });

  it('should be created', inject([AuthService, AngularFireAuth, AlertController], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
