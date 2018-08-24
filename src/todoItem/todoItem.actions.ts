import { ITodoItem } from '../models/models.item';

export const ADD_TODO = '[TODO] ADD_TODO';
export const DELETE_TODO = '[TODO] DELETE_TODO';

class AddTodo {
  readonly type = ADD_TODO;
  constructor(public payload: ITodoItem) {}
}

class DeleteTodo {
  readonly type = DELETE_TODO;
  constructor(public payload: number) {}
}

export type TodoActions = AddTodo | DeleteTodo;
