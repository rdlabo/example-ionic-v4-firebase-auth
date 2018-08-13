import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmPage } from './confirm.page';
import { AuthService } from '../../auth.service';
import { environment } from '../../../../environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuth } from 'angularfire2/auth';
import { AlertController, IonicModule } from '@ionic/angular';
import { Router } from '@angular/router';

describe('ConfirmPage', () => {
  let component: ConfirmPage;
  let fixture: ComponentFixture<ConfirmPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ConfirmPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [IonicModule.forRoot(), AngularFireModule.initializeApp(environment.firebase)],
      providers: [
        AuthService,
        AngularFireAuth,
        AlertController,
        {
          provide: Router,
          useClass: class {
            navigate = jasmine.createSpy('navigate');
          },
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
