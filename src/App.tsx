import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { addUsuario } from './usuario/actions.usuario';
import { Usuario } from './models/models.usuario';
import { AppState } from './app.state';
import FormUsuario from './components/FormUsuario';

class App extends React.Component {
  public render() {
    return (
      <div>
        <FormUsuario />
      </div>
    );
  }
}

//Ações organizadas em um objeto
const actions = {
  addUsuario: (usuario: Usuario) => addUsuario(usuario)
};

//mapStateToProps mapeia o estado de aplicação para as propriedades do
//componente
/**
 * mapStateToProps
 *
 * @param {AppState} state
 */
const mapStateToProps = (state: AppState) => ({
  user: state.usuarios
});

/**
 * mapDispatchToProps
 *
 * @param {Dispatch} dispatch
 */
const mapDispatchToProps = (dispatch: Dispatch) => ({
  //bindActionCreators autmaticamente aciona um dispatch em todas as ações
  ...bindActionCreators(
    {
      ...actions
    },
    dispatch
  )
});

//Conecta o componente com a store, junto com mapStateToProps e mapDispatchToProps
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
