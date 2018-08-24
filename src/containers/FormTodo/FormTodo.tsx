import * as React from 'react';
// import { IAppState } from './../../app.state';
// import { ITodoItem } from './../../models/models.item';
import { connect } from 'react-redux';
import { IAppState } from '../../app.state';
import { ITodoItem } from '../../models/models.item';
import { AddTodoAction, IAddTodoAction } from '../../todoItem/todoItem.actions';
import { bindActionCreators } from 'redux';
import {
  FormTodoTypingAction,
  IFormTodoTypingAction
} from '../../todoForm/formTodo.actions';
// import { Dispatch, bindActionCreators } from 'redux';
interface IStateProps {
  todos: ITodoItem[];
  text: string;
}

interface IDispatchProps {
  addTodo: (todo: ITodoItem) => IAddTodoAction;
  changeText: (
    text: React.ChangeEvent<HTMLInputElement>
  ) => IFormTodoTypingAction;
}
interface IProps extends IStateProps, IDispatchProps {}

const FormTodo: React.SFC<IProps> = (props: IProps) => (
  <div>
    <input type="text" value={props.text} onChange={props.changeText} />
    <button
      onClick={() =>
        console.log(
          props.addTodo({
            label: props.text,
            done: true
          }),
          props.todos
        )
      }
    >
      Add
    </button>
    {props.todos.map((item, index) => (
      <span key={index}>{item.label}</span>
    ))}
  </div>
);

const mapStateToProps = (state: IAppState): IStateProps => ({
  todos: state.todos.todoItems,
  text: state.formTodo.text
});

const mapDispatchToProps = (dispatch: any): IDispatchProps => ({
  ...bindActionCreators(
    {
      ...{
        addTodo: (todo: ITodoItem) => AddTodoAction(todo),
        changeText: (e: React.ChangeEvent<HTMLInputElement>) =>
          FormTodoTypingAction(e.target.value)
      }
    },
    dispatch
  )
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormTodo);
