import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './services/auth.service';
import { DashboardModulesService } from './services/dashboard-modules.service';
import { ApiClientService } from './services/api-client.service';
import { EncryptionService } from './services/encryption.service';
import { FormInteractionService } from './services/form-interaction.service';
import { ErrorHandlerService } from './services/error-handler.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  providers: [
    ApiClientService,
    AuthService,
    ErrorHandlerService,
    DashboardModulesService,
    EncryptionService,
    FormInteractionService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() core: CoreModule ){
    if (core) {
      throw new Error("You should import core module only in the root module");
    }
  }
}
