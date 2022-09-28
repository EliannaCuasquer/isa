import { TestBed } from '@angular/core/testing';

import { ApisqrService } from './apisqr.service';

describe('ApisqrService', () => {
  let service: ApisqrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApisqrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
