import { TestBed } from '@angular/core/testing';

import { UseClassOverWritingService } from './use-class-over-writing.service';

describe('UseClassOverWritingService', () => {
  let service: UseClassOverWritingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UseClassOverWritingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
