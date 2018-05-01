import { Auth } from '../../models/auth/auth'

const firebaseAuth = firebase.auth()
const authProvider = new firebase.auth.GoogleAuthProvider()

export const system = {
  namespaced: true,
  state: {
    auth: Auth.unspecified()
  },
  mutations: {
    signIn (state) {
      firebaseAuth.onAuthStateChanged(user => {
        if (user) {
          state.auth = new Auth(user)
          return
        }
        firebaseAuth.signInWithRedirect(authProvider)
      })
    },
    signOut (state) {
      state.auth = Auth.unspecified()
      firebaseAuth.signOut()
    }
  }
}
