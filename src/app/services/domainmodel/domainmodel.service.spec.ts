import { TestBed } from '@angular/core/testing';

import { DomainmodelService } from './domainmodel.service';

describe('DomainmodelService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DomainmodelService = TestBed.get(DomainmodelService);
    expect(service).toBeTruthy();
  });
});
