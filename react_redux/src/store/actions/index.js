export const STRIKE_ITEM = 'STRIKE_ITEM'
export const ADD_ITEM='ADD_ITEM'
export const DELETE_ITEM='ADD_TODO'
export const FETCH_DATA="FETCH_DATA"
export const RESOLVE_DATA="RESOLVE_DATA"
export const DATE_ACTION="DATE_ACTION"

export function strikeItem(val) {
  return {
    type: STRIKE_ITEM,
    payload: val
  }
}

export function addTodoItem(val){
  return {
    type:ADD_ITEM,
    payload:val
  }
}

export function deleteTodoItem(val){
  return{
    type:DELETE_ITEM,
    payload:val
  }
}
export function fetchDataAction(val){
return {
  type:FETCH_DATA,
  payload:val
  }
}
export function dateAction(val){
  return{
    type:DATE_ACTION,
    payload:val
  }
}

