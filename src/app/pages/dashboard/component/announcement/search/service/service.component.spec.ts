import { TestBed, waitForAsync } from '@angular/core/testing';

import { SearchAnnouncementService } from './search.service';

describe('SearchComponent', () => {
  let service: SearchAnnouncementService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({}).compileComponents();

    service = TestBed.inject(SearchAnnouncementService);
  }));

  it('SearchAnnouncementService', () => {
    expect(service).toBeTruthy();
  });
});
