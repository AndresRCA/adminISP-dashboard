import { IJsonFormGroup } from "./IJsonFormGroup.interface";

export interface IJsonForm {
  id: number
  name: string;
  formGroups: Array<IJsonFormGroup>;
  /**
   * route that points to the API that is expecting the data from the form
   * @example "/forms/submit/1234"
   */
  submitTarget: string;
}