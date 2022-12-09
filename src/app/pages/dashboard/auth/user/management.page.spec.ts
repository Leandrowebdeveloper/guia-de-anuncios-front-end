import { RouterTestingModule } from '@angular/router/testing';
import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UserManagementPage } from './management.page';
import { FormComponentModule } from 'src/app/components/form/form.module';

import { HeaderModalModule } from 'src/app/components/header-modal/header-modal.module';
import { FormComponent } from 'src/app/components/form/form.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { StorageService } from 'src/app/services/storage/storage.service';
import { Storage } from '@ionic/storage';
import { AuthService } from 'src/app/services/auth/auth.service';

describe('UserManagementPage', () => {
  let component: UserManagementPage;
  let fixture: ComponentFixture<UserManagementPage>;

  // let AuthService: AuthService;

  let storageService: StorageService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserManagementPage],
      imports: [
        IonicModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule,
        FormComponentModule,
        HeaderModalModule,
        // UserGaleryComponentModule,
      ],
      providers: [FormComponent, StorageService, Storage, AuthService],
    }).compileComponents();

    fixture = TestBed.createComponent(UserManagementPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  beforeEach(() => {
    // AuthService = TestBed.inject(AuthService);
    storageService = TestBed.inject(StorageService);
  });

  it('AuthService', () => {
    expect(AuthService).toBeTruthy();
  });

  it('should create component', () => {
    expect(component).toBeTruthy();
  });
});
