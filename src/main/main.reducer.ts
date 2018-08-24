// import { usuarioReducer } from '../usuario/reducer.usuario';
// import { sideBarReducer } from './../sidebar/sidebar.reducer';
import { todoReducer } from './../todoItem/todoItem.reducer';

// //Exportando todos como um objeto unico, para ser usado
// //em combinedReducers
export const rootReducer = {
  todos: todoReducer
};
