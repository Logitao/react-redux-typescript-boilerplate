import { action, ActionPayload } from '../util/utils.actions';
import { Usuario } from '../models/models.usuario';

//Estrutura básica de uma "action"
export const ADD_USUARIO = '[USUARIO] ADD_USUARIO';

export const addUsuario = (usuario: Usuario) =>
  action<Usuario>(ADD_USUARIO, usuario) as ActionPayload<Usuario>;
