import { TestBed, inject } from '@angular/core/testing';

import { IMDBAPIService } from './imdbapi.service';

describe('IMDBAPIService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [IMDBAPIService]
    });
  });

  it('should be created', inject([IMDBAPIService], (service: IMDBAPIService) => {
    expect(service).toBeTruthy();
  }));
});
