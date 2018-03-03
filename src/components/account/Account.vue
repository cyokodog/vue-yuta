<template>
  <div>
    <img class="userIcon" v-bind:src="auth.photoURL">
    {{auth.displayName}}
    <button @click="onChangeUser">Change User</button>
  </div>
</template>

<style scoped>
.userIcon{
  width: 40px;
  border-radius: 4px;
}
</style>

<script>
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
</script>
