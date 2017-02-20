const todoList = []

const list = () => {
  return Object.freeze([...todoList])
}

const store = todo => {
  todoList.push(todo)
  return list()
}

const remove = index => {
  todoList.splice(index, 1)
  return list()
}

export default {
  list,
  store,
  remove
}
