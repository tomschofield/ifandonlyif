import { TestBed } from '@angular/core/testing';

import { GetSaucesService } from './get-sauces.service';

describe('GetSaucesService', () => {
  let service: GetSaucesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetSaucesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
