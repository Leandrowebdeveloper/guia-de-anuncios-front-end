import { TestBed } from '@angular/core/testing';
import { DeleteWorkDayService } from './service.service';

describe('DeleteWorkDayService', () => {
  let service: DeleteWorkDayService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DeleteWorkDayService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
