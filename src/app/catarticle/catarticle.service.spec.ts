import { TestBed } from '@angular/core/testing';

import { CatarticleService } from './catarticle.service';

describe('CatarticleService', () => {
  let service: CatarticleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CatarticleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
