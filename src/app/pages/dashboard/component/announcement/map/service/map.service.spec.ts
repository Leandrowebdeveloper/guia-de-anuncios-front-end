import { TestBed } from '@angular/core/testing';
import { CoordinateAnnouncementService } from './map.service';

describe('CoordinateAnnouncementService', () => {
  let service: CoordinateAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoordinateAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
