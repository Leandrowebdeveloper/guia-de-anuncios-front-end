import { TestBed } from '@angular/core/testing';

import { AnnouncementGuard } from './announcement.guard';

describe('AnnouncementGuard', () => {
  let guard: AnnouncementGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnnouncementGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
