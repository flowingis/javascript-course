export const ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  ADD_TODO_SUCCESS: 'ADD_TODO_SUCCESS',
  REMOVE_TODO: 'REMOVE_TODO',
  REMOVE_TODO_SUCCESS: 'REMOVE_TODO_SUCCESS',
  MARK_AS_DONE: 'MARK_AS_DONE',
  MARK_AS_DONE_SUCCESS: 'MARK_AS_DONE_SUCCESS',
  REQUEST_ERROR: 'REQUEST_ERROR'
}

export default {
  add: message => ({type: ACTION_TYPES.ADD_TODO, payload: message}),
  addSuccess: list => ({type: ACTION_TYPES.ADD_TODO_SUCCESS, payload: list}),
  remove: index => ({type: ACTION_TYPES.REMOVE_TODO, payload: index}),
  removeSuccess: list => ({type: ACTION_TYPES.REMOVE_TODO_SUCCESS, payload: list}),
  markAsDone: message => ({type: ACTION_TYPES.MARK_AS_DONE, payload: message}),
  markAsDoneSuccess: list => ({type: ACTION_TYPES.MARK_AS_DONE_SUCCESS, payload: list}),
  requestError: error => ({type: ACTION_TYPES.REQUEST_ERROR, payload: error})
}
