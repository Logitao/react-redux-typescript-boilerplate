import { Usuario } from './models/models.usuario';

//Estrutura do Estado de Aplicação
/**
 *
 *
 * @export
 * @interface AppState
 */
export interface AppState {
  /**
   *
   *
   * @type {Usuario[]}
   * @memberof AppState
   */
  usuarios: Usuario[];
  sidebar: boolean;
}

export const initialState: AppState = {
  usuarios: [],
  sidebar: true
};
