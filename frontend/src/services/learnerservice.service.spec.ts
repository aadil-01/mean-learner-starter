import { TestBed } from '@angular/core/testing';

import { LearnerserviceService } from './learnerservice.service';

describe('LearnerserviceService', () => {
  let service: LearnerserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LearnerserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
