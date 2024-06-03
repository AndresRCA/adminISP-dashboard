import { TestBed } from '@angular/core/testing';

import { ModuleCardMenuGuard } from './module-card-menu.guard';
import { DashboardModulesService } from 'src/app/core/services/dashboard-modules.service';
import { EncryptionService } from 'src/app/core/services/encryption.service';

describe('ModuleCardMenuGuard', () => {
  let guard: ModuleCardMenuGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        DashboardModulesService,
        EncryptionService
      ]
    });
    guard = TestBed.inject(ModuleCardMenuGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
