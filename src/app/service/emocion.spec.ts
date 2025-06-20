import { TestBed } from '@angular/core/testing';

import { Emocion } from './emocion';

describe('Emocion', () => {
  let service: Emocion;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Emocion);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
