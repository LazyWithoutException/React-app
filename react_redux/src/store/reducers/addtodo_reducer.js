import {ADD_TODO} from '../actions/index'
import { connect } from 'react-redux'

const initialState = [
    { task: "Idi u kupovinu", },
    { task: "Operi sudove"},
    { task: "Prosetaj psa"}
  ];
  
export  function addTodoReducer(state=initialState,action){
    switch(action.type){
        case ADD_TODO:{
          console.log(" case ADD_TODO")
            state=action.payload
          console.log(state)
        }
        default:{
            console.log("ADD_TODO default")
            return state;
        }
    }
    return state;
}