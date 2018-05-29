import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import 'babel-polyfill'; // не удалять, нужен для нормальной работы
import App from './components/App';
import createStore from './store';

const store = createStore();

const Application = (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(
  Application,
  document.getElementById('root')
);