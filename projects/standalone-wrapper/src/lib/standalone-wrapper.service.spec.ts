import { TestBed } from '@angular/core/testing';

import { StandaloneWrapperService } from './standalone-wrapper.service';

describe('StandaloneWrapperService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: StandaloneWrapperService = TestBed.get(StandaloneWrapperService);
    expect(service).toBeTruthy();
  });
});
