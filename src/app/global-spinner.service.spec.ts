import { TestBed } from '@angular/core/testing';

import { GlobalSpinnerService } from './global-spinner.service';

describe('GlobalSpinnerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GlobalSpinnerService = TestBed.get(GlobalSpinnerService);
    expect(service).toBeTruthy();
  });
});
