import { TestBed } from '@angular/core/testing';
import { ContactAnnouncementService } from './contact.service';

describe('ContactAnnouncementService', () => {
  let service: ContactAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContactAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
