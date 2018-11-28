import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from './reducers'
import './index.css';
import GetTodo from './containers/GetTodo';
import registerServiceWorker from './registerServiceWorker';
let store = createStore(rootReducer)
ReactDOM.render(
  <Provider store={store}>
   <GetTodo />
  </Provider>, 
  document.getElementById('root')
);
registerServiceWorker();
