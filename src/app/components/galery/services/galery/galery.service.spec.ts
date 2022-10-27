import { Storage } from '@ionic/storage';
import { RouterTestingModule } from '@angular/router/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { GaleryService } from './galery.service';

describe('GaleryService', () => {
  let service: GaleryService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
      providers: [Storage],
    });
    service = TestBed.inject(GaleryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
