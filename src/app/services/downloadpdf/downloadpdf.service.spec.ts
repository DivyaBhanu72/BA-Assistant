import { TestBed } from '@angular/core/testing';

import { DownloadpdfService } from './downloadpdf.service';

describe('DownloadpdfService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DownloadpdfService = TestBed.get(DownloadpdfService);
    expect(service).toBeTruthy();
  });
});
