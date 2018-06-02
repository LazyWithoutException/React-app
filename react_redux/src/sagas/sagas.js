import { call, put, takeEvery, takeLatest } from 'redux-saga/effects'
import {fetchTasks,fetchStrike,fetchDelete,jsonServerAdd} from '../api/fetch'
import {FETCH_DATA, STRIKE_ITEM,DELETE_ITEM, ADD_ITEM } from '../store/actions/index'

// worker Saga: will be fired on USER_FETCH_REQUESTED actions
function* fetchTask(action) {
   try {
       const data = yield call(fetchTasks, action.payload);
      yield put({type: "RESOLVE_DATA", task: data});
   } catch (e) {
      yield put({type: "RESOLVE_DATA_ERROR", message: e.message});
   }
}

export  function* strikeItemSaga(action){
    try{
        const data=yield call(fetchStrike,action.payload)
    }catch(e){
    }
}
export function* deleteItemSaga(action){
    try{
        const data=yield call(fetchDelete,action.payload)
    }catch(e){
        console.log("error delete SAGA")
    }
}
export function* addItemSaga(action){
    try{
        const data=yield call(jsonServerAdd,action.payload)
    }catch(e){
        console.log("error delete SAGA")
    }
}

// osuluskuje koje su akcije poslate
export default function* mySaga() {
    yield takeEvery(FETCH_DATA, fetchTask);
    yield takeEvery(STRIKE_ITEM, strikeItemSaga);
    yield takeEvery(ADD_ITEM, addItemSaga);
    yield takeEvery(DELETE_ITEM, deleteItemSaga);
  }
  