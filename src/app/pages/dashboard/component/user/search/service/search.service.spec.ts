import { TestBed, waitForAsync } from '@angular/core/testing';

import { SearchUserService } from './search.service';

describe('SearchComponent', () => {
  let service: SearchUserService;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({}).compileComponents();

    service = TestBed.inject(SearchUserService);
  }));

  it('SearchUserService', () => {
    expect(service).toBeTruthy();
  });
});
