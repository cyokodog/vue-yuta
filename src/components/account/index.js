export default {
  name: 'account',
  props: {
    auth: null,
    signOut: null
  },
  methods: {
    onChangeUser () {
      this.signOut()
    }
  }
}
