import { Reducer } from 'redux';
import { ITodoState } from '../app.state';
import { TodoActions } from './todoItem.actions';

export const initialState: ITodoState = {
  todoItems: []
};

const reducer: Reducer<ITodoState> = (
  state: ITodoState = initialState,
  action: TodoActions
) => {
  switch (action.type) {
    case '@@TODO/ADD_TODO': {
      return { ...state, todoItems: [...state.todoItems, action.payload.todo] };
    }
    case '@@TODO/DELETE_TODO': {
      return state;
    }
    default:
      return state;
  }
};

export default reducer;
