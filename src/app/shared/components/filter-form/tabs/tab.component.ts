import { Component, Input } from '@angular/core';
@Component({
  selector: 'app-tab',
  styles: [`.pane{padding: 1em;}`],
  template: `
    <div [hidden]="!active" class="pane">
      <ng-content></ng-content>
    </div>
  `
})
export class TabComponent{
  @Input() tabTitle!: string;
  @Input() tabIcon?: string;
  @Input() active: boolean = false;
}
