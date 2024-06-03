import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModuleOptionComponent } from './module-option.component';
import { EncryptionService } from 'src/app/core/services/encryption.service';
import { DashboardModulesService } from 'src/app/core/services/dashboard-modules.service';

describe('ModuleOptionComponent', () => {
  let component: ModuleOptionComponent;
  let fixture: ComponentFixture<ModuleOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModuleOptionComponent ],
      providers: [
        EncryptionService,
        DashboardModulesService
      ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModuleOptionComponent);
    component = fixture.componentInstance;

    // set inputs
    component.module = {
      id: 1,
      name: 'Test',
      order: 1,
      childrenModules: []
    }

    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
