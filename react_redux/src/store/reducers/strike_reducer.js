import {STRIKE_ITEM} from '../actions/index'
import { connect } from 'react-redux'


export  function strikeReducer(state=null,action){
    switch(action.type){
        default:{
            console.log("default stike item reducer ")
        }
    }
    return state;
}