export function uuid() {
  return Math.random().toString(16).slice(2)
}

// listen for mutations being made to our Vuex store, and store them in the local Storage.
export function saveStatePlugin(store) {
  store.subscribe(
    (mutation, state) => {
      localStorage.setItem(
        'board',
        JSON.stringify(state.board)
      )
    }
  )
}
