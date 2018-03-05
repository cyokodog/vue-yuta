export default {
  name: 'account',
  props: {
    auth: Object
  },
  methods: {
    onChangeUser () {
      this.$store.commit('signOut')
    }
  }
}
