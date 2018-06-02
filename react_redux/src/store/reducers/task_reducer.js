import {ADD_ITEM} from '../actions/index'
import {STRIKE_ITEM} from '../actions/index'
import {DELETE_ITEM} from '../actions/index'
import {FETCH_DATA} from '../actions/index'
import {RESOLVE_DATA} from '../actions/index'
import { connect } from 'react-redux'

const initialState = [];
  
export  function taskReducer(state=initialState,action){
    switch(action.type){
        case ADD_ITEM:{
            state=[...state,action.payload]
          return state;
        }
        case STRIKE_ITEM:{
            state=state.slice()
            state.forEach(data=>{
                if(data.id===action.payload.id)
                data.checked=true;
            })
           return state;
          }
          case DELETE_ITEM:{
              state=state.slice();
              return state.filter(data=>{
                return data.id!==action.payload.id
             })
          }
          case RESOLVE_DATA:
            state=action.task
            return state
              default:{
        }
    }
    return state;
}