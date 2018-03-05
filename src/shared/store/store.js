import { Auth } from '../models/auth/auth'
import { db, prepareDb, addPerformance } from '../models/performance/definitions'
import makeDummyData from '../models/performance/makeDummyData'

const state = {
  firebaseAuth: firebase.auth(),
  auth: Auth.unspecified(),
  db
}

const mutations = {
  signIn (state) {
    const authProvider = new firebase.auth.GoogleAuthProvider()
    state.firebaseAuth.onAuthStateChanged(user => {
      if (user) {
        state.auth = new Auth(user)
        return
      }
      state.firebaseAuth.signInWithRedirect(authProvider)
    })
  },
  signOut (state) {
    state.auth = Auth.unspecified()
    state.firebaseAuth.signOut()
  },

  prepareDb (state) {
    prepareDb(state)
  },

  addPerformance (state, param) {
    addPerformance(state, param)
  },

  makeDummyData (state) {
    makeDummyData(state)
  }

}

export default {
  state,
  mutations
}
