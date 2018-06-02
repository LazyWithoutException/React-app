import React from 'react';
import ReactDOM from 'react-dom';
import { Provider} from 'react-redux';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
///////////
import { createStore,applyMiddleware } from 'redux';
import reducer from './store/reducers';
import { addToDo } from './store/actions';
import createSagaMiddleware from 'redux-saga'
import mySaga from './sagas/sagas'

const sagaMiddleware=createSagaMiddleware();
const store = createStore(reducer,applyMiddleware(sagaMiddleware));
sagaMiddleware.run(mySaga)

ReactDOM.render((
  <Provider store={store}>
    <App store={store}/>
  </Provider>
), document.getElementById('root'));
registerServiceWorker();
