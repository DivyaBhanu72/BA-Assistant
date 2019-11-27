import { TestBed } from '@angular/core/testing';

import { GoogleSearchLinksService } from './google-search-links.service';

describe('GoogleSearchLinksService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GoogleSearchLinksService = TestBed.get(GoogleSearchLinksService);
    expect(service).toBeTruthy();
  });
});
