import { TestBed, inject } from '@angular/core/testing';

import { TestAppService } from './test-app.service';


describe('TestAppService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TestAppService]
    });
  });

  it('Service should return 4 values', inject([TestAppService], (service: TestAppService) => {
    let countAuthor = service.getAuthorCount();
    expect(countAuthor).toBe(4);
  }));

});

