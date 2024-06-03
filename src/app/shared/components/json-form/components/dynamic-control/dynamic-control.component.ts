import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms';
import { IControl } from '../../interfaces/IControl.interface';

@Component({
  selector: 'app-dynamic-control',
  templateUrl: './dynamic-control.component.html',
  styleUrls: ['./dynamic-control.component.scss']
})
export class DynamicControlComponent implements OnInit {
  @Input() parentFormGroup!: FormGroup;
  @Input() control!: IControl;

  public currentControl!: FormControl;
  public validationMessage: string = '';

  ngOnInit(): void {
    // get control for reactivity
    this.currentControl = this.parentFormGroup.get(this.control.name) as FormControl;
    // watch for changes for validation 
    this.currentControl.valueChanges.subscribe((val) => {
      if (!this.isControlValid()) {
        this.updateValidationMessage(this.currentControl.errors!);
      }
    });
  }

  public isControlValid(): boolean {
    return !(this.currentControl.invalid && this.currentControl.dirty);
  }

  updateValidationMessage(errors: ValidationErrors) {
    for (let error in errors) {
      switch (error) {
        case 'required':
          this.validationMessage = 'This field is required.'
          return;
      
        case 'pattern':
          this.validationMessage = 'Follow the pattern for this field.'
          return;
      }
    }
  }

  /**
   * Use function passed by the parent
   */
  public async employAction(functionName: string) {

  }
}
