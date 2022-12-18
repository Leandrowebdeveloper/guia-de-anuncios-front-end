import { TestBed } from '@angular/core/testing';

import { UpdateCategoryAnnouncementService } from './category.service';

describe('UpdateCategoryAnnouncementService', () => {
  let service: UpdateCategoryAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateCategoryAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
