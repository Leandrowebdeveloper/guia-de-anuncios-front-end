import { TestBed } from '@angular/core/testing';

import { UserDestroyService } from './user-destroy.service';

describe('UserDestroyService', () => {
  let service: UserDestroyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserDestroyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
