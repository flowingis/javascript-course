import repository from '../model/repository'

import { call, put, takeLatest } from 'redux-saga/effects'
import actions, { ACTION_TYPES } from './actions'

const onAdd = function* (action) {
  try {
    const list = yield call(repository.store, action.payload)
    yield put(actions.addSuccess(list))
  } catch (e) {
    yield put(actions.requestError(e))
  }
}

const onMark = function* (action) {
  try {
    const list = yield call(repository.markAsDone, action.payload)
    yield put(actions.addSuccess(list))
  } catch (e) {
    yield put(actions.requestError(e))
  }
}

const onRemove = function* (action) {
  try {
    const list = yield call(repository.remove, action.payload)
    yield put(actions.addSuccess(list))
  } catch (e) {
    yield put(actions.requestError(e))
  }
}

export default function* () {
  yield [
    takeLatest(ACTION_TYPES.ADD_TODO, onAdd),
    takeLatest(ACTION_TYPES.REMOVE_TODO, onRemove),
    takeLatest(ACTION_TYPES.MARK_AS_DONE, onMark)
  ]
}
