// import { usuarioReducer } from '../usuario/reducer.usuario';
// import { sideBarReducer } from './../sidebar/sidebar.reducer';
import todoReducer from './../todoItem/todoItem.reducer';
import todoFormReducer from './../todoForm/formTodo.reducer';
import { Reducer, combineReducers } from 'redux';
import { IAppState } from '../app.state';

// //Exportando todos como um objeto unico, para ser usado
// //em combinedReducers

export const rootReducer: Reducer<IAppState> = combineReducers<IAppState>({
  todos: todoReducer,
  formTodo: todoFormReducer
});
