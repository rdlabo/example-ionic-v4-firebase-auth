import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SignupPage } from './signup.page';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../../../environments/environment';
import { AuthService } from '@/auth/auth.service';
import { AngularFireAuth } from 'angularfire2/auth';
import { ResetPasswordPage } from '@/auth/pages/reset-password/reset-password.page';
import { AlertController, IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

describe('SignupPage', () => {
  let component: ResetPasswordPage;
  let fixture: ComponentFixture<ResetPasswordPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ResetPasswordPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase), FormsModule],
      providers: [AuthService, AngularFireAuth, AlertController],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResetPasswordPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
