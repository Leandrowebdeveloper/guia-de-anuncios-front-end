import { TestBed } from '@angular/core/testing';

import { GoogleMapsDirectionService } from './google-maps-direction.service';

describe('GoogleMapsDirectionService', () => {
  let service: GoogleMapsDirectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GoogleMapsDirectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
