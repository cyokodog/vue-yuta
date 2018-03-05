<template>
  <div>
    <img v-bind:src="auth.photoURL" v-bind:alt="auth.displayName" @click="onChangeUser">
  </div>
</template>

<script>
export default require('./index.js')
</script>
