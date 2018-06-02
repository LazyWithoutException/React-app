import {combineReducers} from 'redux';
import { taskReducer } from './task_reducer';
import { dateReducer } from './date_reducer';

//ovo je STORE prakticno
const rootReducer = combineReducers({
  taskReducerTodo: taskReducer,
  tempDate: dateReducer
})
export default rootReducer;