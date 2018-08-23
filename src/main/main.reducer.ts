import { usuarioReducer } from '../usuario/reducer.usuario';
import { sideBarReducer } from './../sidebar/sidebar.reducer';

//Exportando todos como um objeto unico, para ser usado
//em combinedReducers
export const rootReducer = {
  usuarioReducer,
  sideBarReducer
};
