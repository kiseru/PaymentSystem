import { TestBed, inject } from '@angular/core/testing';

import { BillersService } from './billers.service';

describe('BillersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BillersService]
    });
  });

  it('should be created', inject([BillersService], (service: BillersService) => {
    expect(service).toBeTruthy();
  }));
});
