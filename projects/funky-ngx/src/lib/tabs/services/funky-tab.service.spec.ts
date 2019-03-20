import { TestBed } from '@angular/core/testing';

import { FunkyTabService } from './funky-tab.service';

describe('FunkyTabService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FunkyTabService = TestBed.get(FunkyTabService);
    expect(service).toBeTruthy();
  });
});
