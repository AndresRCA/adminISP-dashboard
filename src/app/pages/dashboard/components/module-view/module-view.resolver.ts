import { inject, isDevMode } from '@angular/core';
import { ActivatedRouteSnapshot, ResolveFn } from '@angular/router';
import { getMockModuleContent } from 'src/mock-data/module-content';
import { IContentBlock } from 'src/shared-interfaces/IContentBlock.interface';
import { IModule } from '../../../../core/interfaces/IModule.interface';
import { ApiClientService } from '../../../../core/services/api-client.service';
import { DashboardModulesService } from '../../../../core/services/dashboard-modules.service';
import { ErrorHandlerService } from 'src/app/core/services/error-handler.service';

export const moduleViewResolver: ResolveFn<IContentBlock[] | void> = async (route: ActivatedRouteSnapshot) => {
  // get services
  const apiClientService = inject(ApiClientService);
  const dashboardModulesService = inject(DashboardModulesService);
  const errorHandlerService = inject(ErrorHandlerService);
  
  // get route data in order to get the neccesary info to fetch content
  const module = route.data['module'] as IModule;
  const contentRoute = module.contentRoute!;

  if (isDevMode()) {
    try {
      let res = await getMockModuleContent(contentRoute);
      dashboardModulesService.setCurrentModule(module);
      return res.data;
    } catch (error: any) {
      console.error(error);
      errorHandlerService.handleServerErrorResponse(error.request.status); // redirect
      return;
    }
  } else {
    try {
      let res = await apiClientService.http.get(contentRoute);
      dashboardModulesService.setCurrentModule(module);
      return res.data as IContentBlock[];
    } catch (error: any) {
      console.error(error);
      errorHandlerService.handleServerErrorResponse(error.request.status); // redirect
      return;
    }
  }
};