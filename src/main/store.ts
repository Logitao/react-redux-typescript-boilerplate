import { createStore, applyMiddleware, combineReducers } from 'redux';

//Thunk é um middleware para promises
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import { logger } from 'redux-logger';
import { rootReducer } from './main.reducer';

const middlewares = [thunk, logger];
const apply = composeWithDevTools(applyMiddleware(...middlewares));
const reducer = combineReducers(rootReducer);

/**
 * Store da aplicação
 * @constant store
 */
export const store = createStore(reducer, apply);

console.log(store.getState());
