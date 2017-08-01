import { TestBed, inject } from '@angular/core/testing';

import { TestDiService } from './test-di.service';

describe('TestDiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestDiService]
    });
  });

  it('should ...', inject([TestDiService], (service: TestDiService) => {
    expect(service).toBeTruthy();
  }));
});
