import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from "@angular/forms";
import { IControl } from "src/app/shared/components/json-form/interfaces/IControl.interface";
import { IJsonFormGroup } from "src/app/shared/components/json-form/interfaces/IJsonFormGroup.interface";

/**
 * The neccesary building blocks for creating a form using the data that comes from the backend.
 */
export abstract class GeneratedForm {
  constructor(private fb: FormBuilder) {}
  
  /**
   * Generate and return a form group (or form array) given the controls defined by the json format
   * @param jsonFormControls controls declared in json format
   * @returns newly generated FormGroup
   */
  private generateFormGroup(jsonFormControls: IJsonFormGroup['formControls']): FormGroup {
    let group: any = {};
    for (let formControl of jsonFormControls) {
      group[formControl.control.name] = this.generateControl(formControl.control);
    }
    return this.fb.group(group);
  }

  /**
   * Generate and return a form control using an IControl
   * @param control
   * @returns newly generated FormControl
   */
  private generateControl(control: IControl): FormControl {
    // create a control
    let customValidators = this.generateValidators(control.validators, control.attributes);
    let newControl = new FormControl(control.attributes?.value || null, customValidators);
    // add attributes to control
    if (control.attributes?.disabled) newControl.disable();
    return newControl;
  }

  /**
   * Generate an array of Validators
   * @param validatorNames
   * @returns empty array if validatorNames doesn't exist, otherwise an array of Validators
   */
  private generateValidators(validatorNames: IControl['validators'] = [], attributes: IControl['attributes']): ValidatorFn[] {
    return validatorNames.map((validatorName) => {
      switch (validatorName) {
        case 'minLength':
          return Validators.minLength(attributes!.minLength!);
        case 'maxLength':
          return Validators.maxLength(attributes!.maxLength!);
        case 'min':
          return Validators.min(attributes!.min!);
        case 'max':
          return Validators.max(attributes!.max!);
        case 'pattern':
          return Validators.pattern(attributes!.pattern!);
        default:
          // for validators that don't have an argument, just using the validatorName as a key is fine
          return Validators[validatorName]
      }
    }) as ValidatorFn[];
  }
}