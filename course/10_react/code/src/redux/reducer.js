import { ACTION_TYPES } from './actions'

const INITIAL_STATE = {
  error: false,
  loading: false,
  todos: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return Object.assign({}, state, {
        loading: true
      })
    case ACTION_TYPES.ADD_TODO_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        todos: [...action.payload]
      })
    case ACTION_TYPES.MARK_AS_DONE:
      return Object.assign({}, state, {
        loading: true
      })
    case ACTION_TYPES.MARK_AS_DONE_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        todos: [...action.payload]
      })
    case ACTION_TYPES.REMOVE_TODO:
      return Object.assign({}, state, {
        loading: true
      })
    case ACTION_TYPES.REMOVE_TODO_SUCCESS:
      return Object.assign({}, state, {
        loading: false,
        todos: [...action.payload]
      })
    case ACTION_TYPES.REQUEST_ERROR:
      return Object.assign({}, state, {
        error: action.payload
      })
    default:
      return state
  }
}
