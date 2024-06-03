import { IActionButton } from "src/app/shared/components/action-buttons/interfaces/IActionButton.interface";

export function getMockActionButtons(): Promise<IActionButton[]> {
  let actionButtons: IActionButton[] = [
    {
      id: 1,
      content: 'register',
      order: 1,
      action: 'submit',
      styleRules: {
        icon: 'fa fa-check',
        color: 'btn-primary'
      }
    },
    {
      id: 2,
      content: 'clear',
      order: 2,
      action: 'reset',
      styleRules: {
        icon: 'fa fa-repeat',
        color: 'btn-secondary'
      }
    },
    {
      id: 3,
      content: 'check form values in console',
      order: 3,
      action: 'showValues',
      styleRules: {
        color: 'btn-secondary'
      }
    }
  ];

  return new Promise((resolve, reject) => {
    resolve(actionButtons)
  });
}