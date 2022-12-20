import { TestBed } from '@angular/core/testing';

import { DemeserviceService } from './demeservice.service';

describe('DemeserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemeserviceService = TestBed.get(DemeserviceService);
    expect(service).toBeTruthy();
  });
});
