import * as types from './mutation-types'
let storageKey = 'localStorage-key'
let storage = {
  get () {
    return JSON.parse(localStorage.getItem(storageKey) || '{}')
  },
  set (state) {
    localStorage.setItem(storageKey, JSON.stringify(state))
  }
}

export default function createPersist () {
  return store => {
    // console.log(store.state)

    store.replaceState(Object.assign({}, store.state, storage.get()))

    // console.log(store.state)
    store.subscribe((mutation, state) => {
      if (mutation.type === types.USER_LOGOUT ||
          mutation.type === types.USER_LOGIN ||
          mutation.type === types.SAVE_STATE ||
          mutation.type === types.REGISTER_INIT ||
          mutation.type === types.GUIDESTATE) {
        // store.replaceState({})
        let d = store.state
        storage.set(d)
      }
    })
  }
}
