import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidatorFn, Validators } from '@angular/forms';
import { IControl } from './interfaces/IControl.interface';
import { IJsonForm } from './interfaces/IJsonForm.interface';
import { IJsonFormGroup } from './interfaces/IJsonFormGroup.interface';
import { FormInteractionService } from 'src/app/core/services/form-interaction.service';

/**
 * This component creates a form in a certain format, all it needs is a IJsonForm object.
 */
@Component({
  selector: 'app-json-form',
  templateUrl: './json-form.component.html',
  styleUrls: ['./json-form.component.scss']
})
export class JsonFormComponent implements OnInit, OnDestroy {
  /**
   * Form coming from the backend
   */
  @Input() jsonForm!: IJsonForm;

  /**
   * Id used to identify the current angular component
   */
  private formComponentId: string = '';

  /**
   * Angular reactive form
   */
  public form!: FormGroup;
  /**
   * When the user wants to clear the form, this object stores the initial values
   */
  public formInitialValues: any;

  constructor(
    private fb: FormBuilder,
    private formInteractionService: FormInteractionService
  ) { }

  /**
   * Initialize form groups from the given jsonForm format
   */
  ngOnInit(): void {
    // initialize the id for this component for later use
    this.formComponentId = 'form_' + this.jsonForm.id;

    let formGroups: any = {}
    for (let formGroup of this.jsonForm.formGroups) {
      formGroups[formGroup.name!] = this.generateFormGroup(formGroup.formControls);
    }
    this.form = this.fb.group(formGroups);
    this.formInitialValues = this.form.value;
    // store the component so we can access its info on other components or services
    console.log('adding ' + this.formComponentId);
    this.formInteractionService.addComponent(this.formComponentId, this);
  }

  ngOnDestroy(): void {
    console.log('destroying ' + this.formComponentId);
    this.formInteractionService.removeComponent(this.formComponentId);
  }

  /**
   *
   * @param name name used to identify the form group
   * @returns
   */
  public getFormGroup(name: string): FormGroup {
    return this.form.get(name) as FormGroup;
  }

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
