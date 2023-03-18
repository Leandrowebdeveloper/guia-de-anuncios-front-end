import { TestBed } from '@angular/core/testing';

import { AdminPasswordService } from './password.service';

describe('AdminPasswordService', () => {
  let service: AdminPasswordService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AdminPasswordService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
