import { Component, Input } from '@angular/core';
import { IActionButton } from './interfaces/IActionButton.interface';
import { FormInteractionService } from 'src/app/core/services/form-interaction.service';

@Component({
  selector: 'app-action-buttons',
  templateUrl: './action-buttons.component.html',
  styleUrls: ['./action-buttons.component.scss']
})
export class ActionButtonsComponent {
  @Input() buttons!: IActionButton[];

  constructor(private formInteractionService: FormInteractionService) {}

  public employAction(functionName: keyof FormInteractionService): void {
    const func = this.formInteractionService[functionName];
    if (typeof func === 'function') {
      // @ts-ignore
      func.call(this.formInteractionService);
    } else {
      console.error(`no function with the name '${functionName}' exists in the FormInteractionService`);
    }
  }
}
