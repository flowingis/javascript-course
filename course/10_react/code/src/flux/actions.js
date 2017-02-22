import dispatcher from './dispatcher'

export const ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  MARK_AS_DONE_TODO: 'MARK_AS_DONE_TODO'
}

const add = message => {
  dispatcher.dispatch({
    actionType: ACTION_TYPES.ADD_TODO,
    payload: message
  })
}

const remove = function (index) {
  dispatcher.dispatch({
    actionType: ACTION_TYPES.REMOVE_TODO,
    payload: index
  })
}

const markAsDone = function (index) {
  dispatcher.dispatch({
    actionType: ACTION_TYPES.MARK_AS_DONE_TODO,
    payload: index
  })
}

export default {
  add,
  remove,
  markAsDone
}
