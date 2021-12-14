import { TestBed } from '@angular/core/testing';

import { ServiciosPService } from './servicios-p.service';

describe('ServiciosPService', () => {
  let service: ServiciosPService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiciosPService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
