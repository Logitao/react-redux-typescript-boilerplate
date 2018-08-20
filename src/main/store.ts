import { createStore, applyMiddleware, combineReducers } from 'redux';

//Thunk é um middleware para promises
import thunk from 'redux-thunk';
import { rootReducer } from './main.reducer';

//Store

/**
 * Store da aplicação
 * @constant store
 */
export const store = createStore(
  combineReducers(rootReducer),
  applyMiddleware(thunk)
);
