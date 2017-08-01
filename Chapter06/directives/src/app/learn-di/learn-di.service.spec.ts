import { TestBed, inject } from '@angular/core/testing';

import { LearnDiService } from './learn-di.service';

describe('LearnDiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LearnDiService]
    });
  });

  it('should ...', inject([LearnDiService], (service: LearnDiService) => {
    expect(service).toBeTruthy();
  }));
});
