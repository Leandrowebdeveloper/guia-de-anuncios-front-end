import { TestBed } from '@angular/core/testing';
import { WorkDayAnnouncementService } from './work-days.service';

describe('WorkDayAnnouncementService', () => {
  let service: WorkDayAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WorkDayAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
