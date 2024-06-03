import { IJsonFormControl } from "./IJsonFormControl.interface";
import { IStyleRules } from "../../../../../shared-interfaces/IStyleRules.interface";

export interface IJsonFormGroup {
  id: number;
  name: string;
  order: number;
  formControls: Array<IJsonFormControl>;
  styleRules: IStyleRules | null;
  /**
   * If true the formControls will be loaded using a function instead of a table.
   * Also if true formControls should be an empty array when this object is retrieved from the table.
   */
  isFromApiOrigin: boolean;
  /**
   * Function name that should exist in the backend with the function of retrieving the controls for this form group.
   * Is null if isFromApiOrigin=false
   */
  controlsSource: string | null;
}