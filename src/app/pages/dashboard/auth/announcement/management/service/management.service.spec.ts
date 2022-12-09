import { TestBed } from '@angular/core/testing';

import { ManagementAnnouncementService } from './management.service';

describe('ManagementAnnouncementService', () => {
  let service: ManagementAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ManagementAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
