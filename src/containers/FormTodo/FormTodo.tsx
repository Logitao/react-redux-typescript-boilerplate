import * as React from 'react';
// import { IAppState } from './../../app.state';
// import { ITodoItem } from './../../models/models.item';
import { connect } from 'react-redux';
import { IAppState } from '../../app.state';
import { ITodoItem } from '../../models/models.item';
// interface IDispatchProps {}
interface IStateProps {
  todos: ITodoItem[];
}
// interface IDispatchProps {

// }
interface IProps extends IStateProps {}

const FormTodo: React.SFC<IProps> = (props: IProps) => (
  <div>
    <input type="text" />
    <button onClick={() => console.log('asdsa')}>Add</button>
  </div>
);

const mapStateToProps = (state: IAppState): IStateProps => ({
  todos: state.todos.todoItems
});

export default connect(mapStateToProps)(FormTodo);
