import { TestBed } from '@angular/core/testing';
import { CityAnnouncementService } from './city.service';

describe('CityAnnouncementService', () => {
  let service: CityAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CityAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
