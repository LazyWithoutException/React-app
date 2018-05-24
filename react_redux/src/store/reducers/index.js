import {combineReducers} from 'redux';
import { addTodoReducer } from './addtodo_reducer';
import { strikeReducer } from './strike_reducer';


const rootReducer = combineReducers({
  addTodo: addTodoReducer,
  strike: strikeReducer
})
export default rootReducer;