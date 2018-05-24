import {STRIKE_ITEM} from '../actions/index'
import { connect } from 'react-redux'

const initialState = [
    {task:"Nauci redux"},
    {task:"Nauci react"}
  ];
export  function strikeReducer(state=initialState,action){
    switch(action.type){
        case STRIKE_ITEM:{
            console.log("case stike item reducer ")
            state=[{task:'nauci redux'}]
            return state;
        }
        default:{
            console.log("default stike item reducer ")
        }
    }
    return state;
}