import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
///////////
import { createStore } from 'redux';
import reducer from './store/reducers';
import { addToDo } from './store/actions';

 const store = createStore(reducer);
console.log(store.getState())
console.log("izglavni index.js");
ReactDOM.render((
  <Provider store={store}>
    <App store={store}/>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
