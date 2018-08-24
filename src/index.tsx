import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import 'typeface-roboto';
import { Provider } from 'react-redux';
import store from './main/store';
import { Routes } from './main/main.routes';
import { HashRouter } from 'react-router-dom';
import { RouteObject } from './models/models.routes';
/**
 * Constante de rotas
 * Onde todas as rotas e os componentes correspondentes ficam
 * @constant routes
 * @type {RouteObject[]}
 */
const routes: RouteObject[] = [
  {
    path: '/',
    component: App
  }
];

//Conectando react com redux usando <Provider>
ReactDOM.render(
  <Provider store={store}>
    <HashRouter>
      <Routes routes={routes} />
    </HashRouter>
  </Provider>,
  document.getElementById('root') as HTMLElement
);
