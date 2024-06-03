import { TestBed } from '@angular/core/testing';

import { ErrorHandlerService } from './error-handler.service';
import { Router } from '@angular/router';

describe('ErrorHandlerService', () => {
  let service: ErrorHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [ErrorHandlerService] });
    service = TestBed.inject(ErrorHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
