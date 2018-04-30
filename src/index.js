import { mapMutations } from 'vuex'
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
  methods: {
    ...mapMutations([
      'signIn',
      'signOut',
      'prepareDb'
    ])
  },
  mounted () {
    this.signIn()
    this.prepareDb()
  }
}
