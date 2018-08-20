import { ADD_USUARIO } from './actions.usuario';
import { Usuario } from '../models/models.usuario';
import { ActionPayload } from '../util/utils.actions';
import { AppState, initialState } from '../app.state';

/**
 * Estrutura básica de um redux reducer
 *
 * @param {AppState} [state=initialState] Estado de aplicação
 * @param {ActionPayload<Usuario>} action Ação (Action)
 * @returns {AppState} Novo estado de aplicação processado
 */
export const usuarioReducer = (
  state: AppState = initialState,
  action: ActionPayload<Usuario>
): AppState => {
  switch (action.type) {
    case ADD_USUARIO: {
      const usuario: Usuario = action.payload;
      return {
        ...state,
        usuarios: [...state.usuarios, usuario]
      };
    }
    default:
      return state;
  }
};
