import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, compose, createStore } from 'redux';

import './index.css';
import rootReducer from './reducers/rootReducer';
import registerServiceWorker from './registerServiceWorker';
import homeSaga from './sagas/homeSaga';
import {
  BasicExample,
  URLParameters,
  AuthExample,
  CustomLink,
  PreventingTransitionsExample,
  NoMatchExample,
  RecursiveExample,
  SidebarExample,
  AnimationExample,
  AmbiguousMatch,
  RouteConfigExample
} from './routers/index';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  rootReducer,
  {},
  composeWithDevTools(
    applyMiddleware(
      sagaMiddleware
      // ... other middlewares ...
    )
  )
);
sagaMiddleware.run(homeSaga);

const render = () => {
  // this function will be reused
  ReactDOM.render(
    <Provider store={store}>
      <RouteConfigExample />
    </Provider>,
    document.getElementById('root')
  );
};

render();

registerServiceWorker();