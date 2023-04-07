import { LoginAdminService } from './login-admin.service';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { IonicStorageModule } from '@ionic/storage-angular';

describe('LoginAdminService', () => {
  let service: LoginAdminService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, IonicStorageModule.forRoot()],
    });
    service = TestBed.inject(LoginAdminService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
