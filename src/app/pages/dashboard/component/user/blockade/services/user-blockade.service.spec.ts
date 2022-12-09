import { TestBed } from '@angular/core/testing';

import { UserBlockadeService } from './user-blockade.service';

describe('UserBlockadeService', () => {
  let service: UserBlockadeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserBlockadeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
