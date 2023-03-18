import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { PublicAutorizationGuard } from './public-autorization.guard';

describe('PublicAutorizationGuard', () => {
  let guard: PublicAutorizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule],
    });
    guard = TestBed.inject(PublicAutorizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
