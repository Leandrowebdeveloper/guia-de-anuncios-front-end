import { AuthAnnouncementService } from 'src/app/pages/dashboard/auth/announcement/service/auth-announcement.service';
import { Storage } from '@ionic/storage';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SystemAccessAdminPage } from './system-access-admin.page';
import { LoginAdminService } from './services/login-admin.service';

import { FormComponentModule } from 'src/app/components/form/form.module';
import { LoginAdminResolver } from './guard/resolve.guard';

describe('SystemAccessAdminPage', () => {
  let component: SystemAccessAdminPage;
  let fixture: ComponentFixture<SystemAccessAdminPage>;

  let loginService: LoginAdminService;
  let authAnnouncementService: AuthAnnouncementService;
  let guard: LoginAdminResolver;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [SystemAccessAdminPage],
      imports: [
        IonicModule.forRoot(),
        RouterTestingModule,
        HttpClientTestingModule,
        FormComponentModule,
      ],
      providers: [
        Storage,
        LoginAdminResolver,
        LoginAdminService,
        AuthAnnouncementService,
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(SystemAccessAdminPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    loginService = TestBed.inject(LoginAdminService);
    authAnnouncementService = TestBed.inject(AuthAnnouncementService);
    guard = TestBed.inject(LoginAdminResolver);
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });

  it('AuthAnnouncementService', () => {
    expect(authAnnouncementService).toBeTruthy();
  });

  it('loginService', () => {
    expect(loginService).toBeTruthy();
  });

  it('guard', () => {
    expect(guard).toBeTruthy();
  });
});
