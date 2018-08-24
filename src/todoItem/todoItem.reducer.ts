import { initialState, IAppState } from '../app.state';
import { TodoActions, ADD_TODO } from './todoItem.actions';

export const todoReducer = (
  state = initialState,
  action: TodoActions
): IAppState => {
  switch (action.type) {
    case ADD_TODO: {
      const { label, done } = action.payload;
      return {
        ...state,
        todoItems: [
          ...state.todoItems,
          {
            label,
            done
          }
        ]
      };
    }

    default:
      return state;
  }
};
