import {ADD_ITEM} from '../actions/index'
import {STRIKE_ITEM} from '../actions/index'
import {DELETE_ITEM} from '../actions/index'

import { connect } from 'react-redux'

const initialState = [
    { task: "Idi u kupovinu",
      checked:false
    },
    { task: "Operi sudove",
      checked:true
    },
    { task: "Prosetaj psa",
      checked:false
    }
  ];
  
export  function addTodoReducer(state=initialState,action){
    switch(action.type){
        case ADD_ITEM:{
          console.log(" case ADD_TODO")
            state=[...state,action.payload]
          console.log(state)
          return state;
        }
        case STRIKE_ITEM:{
            console.log(" case STRIKE_ITEM")
            state=state.slice()
            state.forEach(data=>{
                if(data.task===action.payload)
                data.checked=true;
            })
           return state;
          }
          case DELETE_ITEM:{
              console.log(" case DELETE_ITEM")
              state=state.slice();
              return state.filter(data=>{
                return data.task!==action.payload
             })
          }
        default:{
            console.log("ADD_TODO default")
        }
    }
    return state;
}