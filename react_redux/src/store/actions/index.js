export const STRIKE_ITEM = 'STRIKE_ITEM'
export const ADD_TODO='ADD_TODO'

export function strikeItem(val) {
  console.log('STRIKE_ITEM')
  return {
    type: STRIKE_ITEM,
    payload: val
  }
}

export function addTodoItem(val){
  console.log('ADD_TOOD')
  return {
    type:'ADD_TODO',
    payload:val
  }
}

