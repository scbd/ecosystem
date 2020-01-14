
// const hasDownloads  = (state) =>
const save = (state, payload) => {
  for (const [ key, value ] of Object.entries(payload))
    state[key] = value
}

const logOut = (state) => {
  for (const [ key ] of Object.entries(state))
    delete state[key]
}

const  namespaced = true
const state       = () => ({ })
const mutations   = { save, logOut }

const me = { namespaced, state, mutations }

export default me