import { TestBed } from '@angular/core/testing';

import { CreateCategoryAnnouncementService } from './create.service';

describe('CreateCategoryAnnouncementService', () => {
  let service: CreateCategoryAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CreateCategoryAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
