import Account from './components/account/Account'

export default {
  name: 'App',
  components: {
    Account
  },
  computed: {
    auth () {
      return this.$store.state.auth
    },
    performances () {
      return this.$store.state.db.performances
    }
  },
  mounted () {
    this.$store.commit('signIn')
    this.$store.commit('prepareDb')
    // this.$store.commit('makeDummyData')
  }
}
