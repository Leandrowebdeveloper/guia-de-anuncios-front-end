import { TestBed } from '@angular/core/testing';
import { CategoryAnnouncementService } from './service.service';

describe('CategoryAnnouncementService', () => {
  let service: CategoryAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
