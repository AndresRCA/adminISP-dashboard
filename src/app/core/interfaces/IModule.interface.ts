import { IStyleRules } from "src/shared-interfaces/IStyleRules.interface";

export interface IModule {
  id: number;
  name: string;
  /**
   * route used for building a router:
   * "dashboard/subscribers/register", "dashboard/reports/invoices", etc 
   */
  route?: string;
  /**
   * API route used in the frontend to access the module's view data.
   * for example: "/modules/:id/content-blocks"
   */
  contentRoute?: string;
  order: number;
  styleRules?: Pick<IStyleRules, 'icon'>;
  /**
   * can be empty
   */
  childrenModules: IModule[];
}