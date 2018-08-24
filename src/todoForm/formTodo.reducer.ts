import { Reducer } from 'redux';
import { IFormTodoState } from '../models/models.item';
import { IFormTodoTypingActions } from './formTodo.actions';

export const initialState: IFormTodoState = {
  text: ''
};

const reducer: Reducer<IFormTodoState> = (
  state: IFormTodoState = initialState,
  action: IFormTodoTypingActions
) => {
  switch (action.type) {
    case '@@FORMTODO/CHANGE_TEXT': {
      return { ...state, text: action.payload.text };
    }
    default:
      return state;
  }
};

export default reducer;
