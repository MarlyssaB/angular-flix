import { TestBed } from '@angular/core/testing';

import { MovieServiceApiService } from './movie-service-api.service';

describe('MovieServiceApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MovieServiceApiService = TestBed.get(MovieServiceApiService);
    expect(service).toBeTruthy();
  });
});
