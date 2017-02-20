const todoList = []

const list = () => {
  return Object.freeze([...todoList])
}

const store = message => {
  todoList.push({
    message,
    done: false
  })
  return list()
}

const remove = index => {
  todoList.splice(index, 1)
  return list()
}

const markAsDone = index => {
  todoList[index].done = true
  return list()
}

export default {
  list,
  store,
  remove,
  markAsDone
}
