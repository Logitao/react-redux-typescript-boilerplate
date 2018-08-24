import { Action, ActionCreator } from 'redux';

export interface IFormTodoTypingAction extends Action {
  type: '@@FORMTODO/CHANGE_TEXT';
  payload: {
    text: string;
  };
}

export const FormTodoTypingAction: ActionCreator<IFormTodoTypingAction> = (
  text: string
) => ({
  type: '@@FORMTODO/CHANGE_TEXT',
  payload: {
    text
  }
});

export type IFormTodoTypingActions = IFormTodoTypingAction;
