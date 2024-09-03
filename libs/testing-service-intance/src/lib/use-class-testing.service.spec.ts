import { TestBed } from '@angular/core/testing';

import { UseClassTestingService } from './use-class-testing.service';

describe('UseClassTestingService', () => {
  let service: UseClassTestingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseClassTestingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
