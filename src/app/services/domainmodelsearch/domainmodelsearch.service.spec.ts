import { TestBed } from '@angular/core/testing';

import { DomainmodelsearchService } from './domainmodelsearch.service';

describe('DomainmodelsearchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomainmodelsearchService = TestBed.get(DomainmodelsearchService);
    expect(service).toBeTruthy();
  });
});
