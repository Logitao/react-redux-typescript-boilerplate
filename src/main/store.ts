import { createStore, applyMiddleware, Store } from 'redux';

//Thunk é um middleware para promises
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import { rootReducer } from './main.reducer';
import { IAppState } from './../app.state';
import { TodoActions } from '../todoItem/todoItem.actions';

function configureStore(initialState: IAppState): Store<IAppState> {
  const composeEnhancers = composeWithDevTools({});

  return createStore<IAppState, TodoActions, any, any>(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(logger, thunk))
  );
}

export default configureStore({
  todos: {
    todoItems: [
      {
        label: 'todo1',
        done: false
      },
      {
        label: 'todo2',
        done: true
      },
      {
        label: 'todo3',
        done: true
      },
      {
        label: 'todo4',
        done: true
      },
      {
        label: 'todo5',
        done: false
      }
    ]
  }
});
