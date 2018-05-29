import { createStore, applyMiddleware, compose } from 'redux';
import Saga from 'redux-saga';
import rootReducer from './reducers';
import rootSaga from './sagas';

const sagaMiddleware = Saga();

export default initState => {
  const store = createStore(
    rootReducer,
    initState,
    compose(
      applyMiddleware(sagaMiddleware),
      window.devToolsExtension ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
}