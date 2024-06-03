import { Injectable } from '@angular/core';
import { JsonFormComponent } from 'src/app/shared/components/json-form/json-form.component';
import { ApiClientService } from './api-client.service';

/**
 * In this service we store information about the forms being used in the application and perform any operation on the components using them
 */
@Injectable()
export class FormInteractionService {
  private formComponents: Array<{id: string, component: JsonFormComponent}> = [];

  constructor(private apiClientService: ApiClientService) { }

  public addComponent(componentId: string, component: JsonFormComponent): void {
    this.formComponents.push({ id: componentId, component });
  }

  public removeComponent(componentId: string): void {
    let index = this.formComponents.findIndex((val) => val.id === componentId);
    if (index === -1) {
      console.error(`component with id=${componentId} doesn't exist.`);
      return;
    }

    this.formComponents.splice(index, 1);
  }

  /**
   * Reset the input values of all forms
   */
  public reset(): void {
    for (let formComponent of this.formComponents) {
      formComponent.component.form.reset(formComponent.component.formInitialValues);
    }
  }

  /**
   * Send form data to API
   */
  public submit(): void {
    for (let formComponent of this.formComponents) {
      if (formComponent.component.form.invalid) {
        console.error(`form '${formComponent.id}' is not valid.`);
        return;
      }
  
      console.log('data to send to api', formComponent.component.form.value);
      this.apiClientService.http.post(formComponent.component.jsonForm.submitTarget, formComponent.component.form.value)
    }
  }

  public showValues(): void {
    for (let formComponent of this.formComponents) {
      console.log(`form '${formComponent.id}' values:`, formComponent.component.form.value);
    }
  }
}
