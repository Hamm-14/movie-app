import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {createStore, applyMiddleware} from 'redux';

import rootReducer from './reducers';
import './index.css';
import App from './components/App';

// const logger = function({dispatch, getState}){
//   return function(next){
//     return function(action){
//       //middleware code
//       console.log('ACTION TYPE = ',action.type);
//       next(action);
//     }
//   }
// }

const logger = ({dispatch, getState}) => (next) => (action) => {
  //middleware Code
  console.log('ACTION TYPE = ',action.type);
  next(action);
}

const store = createStore(rootReducer,applyMiddleware(logger));


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App store={store} />);



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

