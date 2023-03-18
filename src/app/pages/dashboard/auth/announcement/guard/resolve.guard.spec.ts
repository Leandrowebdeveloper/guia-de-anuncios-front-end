import { TestBed } from '@angular/core/testing';

import { AnnouncementResolve } from './resolve.guard';

describe('AnnouncementResolve', () => {
  let guard: AnnouncementResolve;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AnnouncementResolve);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
