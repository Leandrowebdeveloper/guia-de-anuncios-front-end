import { TestBed } from '@angular/core/testing';

import { DeleteAddressService } from './service.service';

describe('DeleteAddressService', () => {
  let service: DeleteAddressService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteAddressService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
