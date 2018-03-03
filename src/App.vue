<template>
  <div id="app">
    <div
      v-if="auth.isAuthed"
    >
      <account
        :auth="auth"
      ></account>
    </div>
    <div v-else>Logging in...</div>


    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
import Account from './components/account/Account'

export default {
  name: 'App',
  components: {
    Account
  },
  computed: {
    auth () {
      return this.$store.state.auth
    }
  },
  mounted () {
    this.$store.commit('signIn')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
