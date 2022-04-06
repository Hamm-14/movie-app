import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux';

import movies from './reducers';
import './index.css';
import App from './components/App';

const store = createStore(movies);

console.log('store',store);
console.log('state',store.getState());



ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

