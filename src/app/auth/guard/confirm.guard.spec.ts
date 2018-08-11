import { TestBed, async, inject } from '@angular/core/testing';

import { ConfirmGuard } from './confirm.guard';

describe('AuthGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConfirmGuard],
    });
  });

  it('should ...', inject([ConfirmGuard], (guard: ConfirmGuard) => {
    expect(guard).toBeTruthy();
  }));
});
