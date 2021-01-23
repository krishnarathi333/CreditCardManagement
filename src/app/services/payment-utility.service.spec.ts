import { TestBed } from '@angular/core/testing';

import { PaymentUtilityService } from './payment-utility.service';

describe('PaymentUtilityService', () => {
  let service: PaymentUtilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaymentUtilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
