export default (appState) => {
  const store = message => {
    appState.loading = true
    return new Promise(resolve => {
      setTimeout(() => {
        appState.loading = false
        appState.todos.push({
          message,
          done: false
        })
        return appState
      }, 1000)
    })
  }

  const remove = index => {
    appState.loading = true
    return new Promise(resolve => {
      setTimeout(() => {
        appState.loading = false
        appState.todos.splice(index, 1)
        return appState
      }, 1000)
    })
  }

  const markAsDone = index => {
    appState.loading = true
    return new Promise(resolve => {
      setTimeout(() => {
        appState.loading = false
        appState.todos[index] = {...appState.todos[index], done: true}
        return appState
      }, 1000)
    })
  }

  return {
    store,
    remove,
    markAsDone
  }
}
