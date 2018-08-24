import * as React from 'react';
import { connect } from 'react-redux';
import { Dispatch, bindActionCreators } from 'redux';
import { IAppState } from './app.state';
import FormTodo from './containers/FormTodo/FormTodo';

class App extends React.Component {
  public render() {
    return (
      <div>
        <h1>TEST</h1>
        <FormTodo />
      </div>
    );
  }
}

const actions = {};
const mapStateToProps = (state: IAppState) => ({});
const mapDispatchToProps = (dispatch: Dispatch) => ({
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
