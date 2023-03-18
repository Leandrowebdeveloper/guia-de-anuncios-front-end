import { TestBed } from '@angular/core/testing';

import { StateAnnouncementService } from './state.service';

describe('StateAnnouncementService', () => {
  let service: StateAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(StateAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
