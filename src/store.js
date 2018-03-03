import { Auth } from './shared/models/auth/auth'

const state = {
  dummy: 'fuga',
  firebaseAuth: firebase.auth(),
  auth: Auth.unspecified()

}

const mutations = {
  signIn () {
    const authProvider = new firebase.auth.GoogleAuthProvider()
    state.firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        state.auth = new Auth(user)
        return
      }
      state.firebaseAuth.signInWithRedirect(authProvider)
    })
  },
  signOut () {
    state.auth = Auth.unspecified()
    state.firebaseAuth.signOut()
  },

  foo (state, bar) {

  }
}

export default {
  state,
  mutations
}
