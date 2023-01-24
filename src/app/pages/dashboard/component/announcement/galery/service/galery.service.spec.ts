import { TestBed } from '@angular/core/testing';
import { GaleryAnnouncementService } from './galery.service';

describe('GaleryAnnouncementService', () => {
  let service: GaleryAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GaleryAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
