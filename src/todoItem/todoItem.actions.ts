import { ITodoItem } from '../models/models.item';
import { Action, ActionCreator } from 'redux';

export interface IAddTodoAction extends Action {
  type: '@@TODO/ADD_TODO';
  payload: {
    todo: ITodoItem;
  };
}
export interface IDeleteTodoAction extends Action {
  type: '@@TODO/DELETE_TODO';
  payload: {
    key: number;
  };
}

export const AddTodoAction: ActionCreator<IAddTodoAction> = (
  todo: ITodoItem
) => ({
  type: '@@TODO/ADD_TODO',
  payload: {
    todo
  }
});

export const DeleteTodoAction: ActionCreator<IDeleteTodoAction> = (
  key: number
) => ({
  type: '@@TODO/DELETE_TODO',
  payload: {
    key
  }
});

export type TodoActions = IDeleteTodoAction | IAddTodoAction;
