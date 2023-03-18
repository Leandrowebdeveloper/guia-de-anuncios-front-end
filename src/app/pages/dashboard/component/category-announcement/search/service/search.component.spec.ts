import { TestBed } from '@angular/core/testing';
import { SearchCategoryAnnouncementService } from './search.service';

describe('SearchCategoryAnnouncementService', () => {
  let service: SearchCategoryAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchCategoryAnnouncementService);
  });

  it('SearchCategoryAnnouncementService', () => {
    expect(service).toBeTruthy();
  });
});
