import { TestBed } from '@angular/core/testing';

import { TimepickerlibService } from './timepickerlib.service';

describe('TimepickerlibService', () => {
  let service: TimepickerlibService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TimepickerlibService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
