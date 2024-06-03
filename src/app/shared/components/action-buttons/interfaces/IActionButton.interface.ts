import { IStyleRules } from "src/shared-interfaces/IStyleRules.interface";
import { FormInteractionService } from "src/app/core/services/form-interaction.service";

export interface IActionButton {
  id: number;
  /**
   * text that goes inside the button
   */
  content: string;
  description?: string;
  order: number;
  /**
   * function name that should be called in the component
   */
  action: keyof FormInteractionService;
  styleRules?: Pick<IStyleRules, 'icon' | 'color'>;
}