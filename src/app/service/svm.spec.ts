import { TestBed } from '@angular/core/testing';

import { Svm } from './svm';

describe('Svm', () => {
  let service: Svm;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Svm);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
