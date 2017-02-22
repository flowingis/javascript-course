import Dispatcher from './dispatcher'
import { ACTION_TYPES } from './actions'
import repository from '../model/repository'

const listeners = []

const emit = () => {
  listeners.forEach(listener => listener())
}

const TodoStore = {
  add: message => {
    repository.store(message)
    emit()
  },
  remove: index => {
    repository.remove(index)
    emit()
  },
  markAsDone: index => {
    repository.markAsDone(index)
    emit()
  },
  list: () => repository.list(),
  addChangeListener: callback => {
    listeners.push(callback)
  },
  removeChangeListener: callback => {
    listeners.splice(listeners.indexOf(callback), 1)
  }
}

Dispatcher.register(action => {
  switch (action.actionType) {
    case ACTION_TYPES.ADD_TODO:
      TodoStore.add(action.payload)
      break
    case ACTION_TYPES.REMOVE_TODO:
      TodoStore.remove(action.payload)
      break
    case ACTION_TYPES.MARK_AS_DONE_TODO:
      TodoStore.markAsDone(action.payload)
      break
  };
})

export default TodoStore
