import React from 'react';
// import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import {createStore} from 'redux';

import rootReducer from './reducers';
import './index.css';
import App from './components/App';

const store = createStore(rootReducer);


const container = document.getElementById('root');
const root = createRoot(container);
root.render(<App store={store} />);



// ReactDOM.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// );

