export const ACTION_TYPES = {
  ADD_TODO: 'ADD_TODO',
  REMOVE_TODO: 'REMOVE_TODO',
  MARK_AS_DONE: 'MARK_AS_DONE'
}

export default {
  add: message => ({type: ACTION_TYPES.ADD_TODO, payload: message}),
  remove: message => ({type: ACTION_TYPES.REMOVE_TODO, payload: message}),
  markAsDone: message => ({type: ACTION_TYPES.MARK_AS_DONE, payload: message})
}
