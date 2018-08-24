import * as React from 'react';
// import { IAppState } from './../../app.state';
// import { ITodoItem } from './../../models/models.item';
import { connect } from 'react-redux';

// interface IDispatchProps {}
interface IStateProps {
  todos: any;
}

interface IProps extends IStateProps {}

const FormTodo: React.SFC<IProps> = (props: IProps) => (
  <div>
    <input type="text" />
    <button onClick={() => console.log(props.todos.todoItems)}>Add</button>
    {
      //props.todos.map((item, index) => (
      //<span key={index}>{item.label}</span>
      //))
    }
  </div>
);

const mapStateToProps = (state: any): IStateProps => ({
  todos: state.todos
});

export default connect(
  mapStateToProps,
  {}
)(FormTodo);
