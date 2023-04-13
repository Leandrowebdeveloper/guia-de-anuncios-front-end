import { TestBed, waitForAsync } from '@angular/core/testing';

import { SearchHomeAnnouncementService } from './search-home.service';

describe('SearchComponent', () => {
  let service: SearchHomeAnnouncementService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({}).compileComponents();

    service = TestBed.inject(SearchHomeAnnouncementService);
  }));

  it('SearchHomeAnnouncementService', () => {
    expect(service).toBeTruthy();
  });
});
