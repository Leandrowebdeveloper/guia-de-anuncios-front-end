import { TestBed } from '@angular/core/testing';

import { DestroyAnnouncementService } from './destroy-announcement.service';

describe('DestroyAnnouncementService', () => {
  let service: DestroyAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DestroyAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
