import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';
import { ApiClientService } from './api-client.service';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AuthService, ApiClientService] });
    service = TestBed.inject(AuthService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
