import { TestBed } from '@angular/core/testing';

import { ModuleDarkService } from './module-dark.service';

describe('ModuleDarkService', () => {
  let service: ModuleDarkService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ModuleDarkService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
