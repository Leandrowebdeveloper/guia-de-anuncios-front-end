import { RouterTestingModule } from '@angular/router/testing';
import { TestBed } from '@angular/core/testing';

import { PrivateAutorizationGuard } from './private-autorization.guard';

describe('PrivateAutorizationGuard', () => {
  let guard: PrivateAutorizationGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
        imports: [RouterTestingModule]
    });
    guard = TestBed.inject(PrivateAutorizationGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
