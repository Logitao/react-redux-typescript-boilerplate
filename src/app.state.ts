import { ITodoItem } from './models/models.item';

export interface IAppState {
  todos: ITodoState;
}

export interface ITodoState {
  todoItems: ITodoItem[];
}
