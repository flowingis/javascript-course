import repository from '../model/repository'

import { ACTION_TYPES } from './actions'

const INITIAL_STATE = {
  todos: []
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACTION_TYPES.ADD_TODO:
      return Object.assign({}, state, {
        todos: repository.store(action.payload)
      })
    case ACTION_TYPES.MARK_AS_DONE:
      return Object.assign({}, state, {
        todos: repository.markAsDone(action.payload)
      })
    case ACTION_TYPES.REMOVE_TODO:
      return Object.assign({}, state, {
        todos: repository.remove(action.payload)
      })
    default:
      return state
  }
}
