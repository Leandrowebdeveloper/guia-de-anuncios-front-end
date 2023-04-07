import { TestBed } from '@angular/core/testing';
import { CategoryUtilities } from './category-utilities.service';

describe('CategoryUtilities', () => {
  let service: CategoryUtilities;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CategoryUtilities);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
