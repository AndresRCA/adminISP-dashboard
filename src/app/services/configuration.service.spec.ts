import { TestBed } from '@angular/core/testing';

import { ConfigurationService } from './configuration.service';
import { AuthService } from '../core/services/auth.service';
import { ApiClientService } from '../core/services/api-client.service';
import { DashboardModulesService } from '../core/services/dashboard-modules.service';
import { ErrorHandlerService } from '../core/services/error-handler.service';

describe('ConfigurationService', () => {
  let service: ConfigurationService;

  beforeEach(() => {
    TestBed.configureTestingModule({ providers: [AuthService, ApiClientService, DashboardModulesService, ErrorHandlerService] });
    service = TestBed.inject(ConfigurationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
