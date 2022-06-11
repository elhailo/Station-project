import { TestBed } from '@angular/core/testing';

import { TheStationService } from './the-station.service';

describe('TheStationService', () => {
  let service: TheStationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TheStationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
