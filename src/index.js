import { mapMutations, mapState } from 'vuex'
import Account from './components/account/Account'

export default {
  name: 'App',

  components: {
    Account
  },

  computed: {
    ...mapState('system', [
      'auth'
    ])
  },

  methods: {
    ...mapMutations('system', [
      'signIn',
      'signOut'
    ]),
    ...mapMutations('performances', [
      'prepareDb'
    ])
  },

  mounted () {
    this.signIn()
    this.prepareDb()
  }
}
