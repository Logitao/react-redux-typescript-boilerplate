import { ITodoItem, IFormTodoState } from './models/models.item';

export interface IAppState {
  todos: ITodoState;
  formTodo: IFormTodoState;
}

export interface ITodoState {
  todoItems: ITodoItem[];
}
