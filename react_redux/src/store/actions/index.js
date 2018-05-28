export const STRIKE_ITEM = 'STRIKE_ITEM'
export const ADD_ITEM='ADD_ITEM'
export const DELETE_ITEM='ADD_TODO'

export function strikeItem(val) {
  console.log('STRIKE_ITEM')
  return {
    type: STRIKE_ITEM,
    payload: val
  }
}

export function addTodoItem(val){
  console.log('ADD_ITEM')
  return {
    type:ADD_ITEM,
    payload:val
  }
}

export function deleteTodoItem(val){
  console.log('delete todo item')
  return{
    type:DELETE_ITEM,
    payload:val
  }
}
