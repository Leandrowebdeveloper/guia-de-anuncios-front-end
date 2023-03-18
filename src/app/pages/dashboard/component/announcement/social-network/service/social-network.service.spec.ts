import { TestBed } from '@angular/core/testing';
import { SocialNetworkAnnouncementService } from './social-network.service';

describe('SocialNetworkAnnouncementService', () => {
  let service: SocialNetworkAnnouncementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SocialNetworkAnnouncementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
