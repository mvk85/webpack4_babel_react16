/* eslint-disable no-unused-vars */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'babel-polyfill'; // не удалять, нужен для нормальной работы
import RootRouter from './components/RootRouter';
import createStore from './store';

const store = createStore();

const Application = (
  <BrowserRouter>
    <Provider store={store}>
      <RootRouter />
    </Provider>
  </BrowserRouter>
);

ReactDOM.render(
  Application,
  document.getElementById('root')
);