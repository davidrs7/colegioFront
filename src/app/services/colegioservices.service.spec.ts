import { TestBed } from '@angular/core/testing';

import { ColegioservicesService } from './colegioservices.service';

describe('ColegioservicesService', () => {
  let service: ColegioservicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ColegioservicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
