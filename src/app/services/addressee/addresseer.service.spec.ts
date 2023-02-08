import { TestBed } from '@angular/core/testing';

import { AddresseerService } from './addresseer.service';

describe('AddresseerService', () => {
  let service: AddresseerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AddresseerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
