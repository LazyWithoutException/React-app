import {DATE_ACTION} from '../actions/index'
import { connect } from 'react-redux'
const initialState=[];

export  function dateReducer(state=initialState,action){
    switch(action.type){
        case DATE_ACTION:
            state={date:action.payload}
            return state;
        default:{
            return state
        }
    }
    return state;
}