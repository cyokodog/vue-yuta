import { db, prepareDb, addPerformance } from '../../models/performance/definitions'

export const performances = {
  namespaced: true,
  state: {
    db
  },
  getters: {
    performances: state => {
      return state.db.performances
    }
  },
  mutations: {
    prepareDb,
    addPerformance
  }
}
