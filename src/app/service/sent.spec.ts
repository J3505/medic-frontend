import { TestBed } from '@angular/core/testing';

import { Sent } from './sent';

describe('Sent', () => {
  let service: Sent;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Sent);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
