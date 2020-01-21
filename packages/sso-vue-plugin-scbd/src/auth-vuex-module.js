
const save = (state, payload) => {
  for (const [ key, value ] of Object.entries(payload))
    state[key] = value
}

const logOut = (state) => {
  for (const [ key ] of Object.entries(state))
    delete state[key]
}

const  namespaced = true
const state       = () => ({ token: '' })
const mutations   = { save, logOut }

const auth = { namespaced, state, mutations }

export default auth