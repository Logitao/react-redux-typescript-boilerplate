import { ITodoItem } from './models/models.item';

//Estrutura do Estado de Aplicação
/**
 *
 *
 * @export
 * @interface AppState
 */
export interface IAppState {
  todoItems: ITodoItem[];
}

export const initialState: IAppState = {
  todoItems: [
    {
      label: 'todo1',
      done: false
    },
    {
      label: 'todo2',
      done: true
    },
    {
      label: 'todo3',
      done: true
    },
    {
      label: 'todo4',
      done: true
    },
    {
      label: 'todo5',
      done: false
    }
  ]
};
