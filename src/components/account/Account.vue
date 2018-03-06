<template>
  <div>
    <a class="userInfo" @click="onChangeUser" href="#">
      <span class="name">{{auth.displayName}}</span><img v-bind:src="auth.photoURL">
    </a>
  </div>
</template>

<style scoped>
.userInfo {
  color: #00aaff;
}
.userInfo > * {
  vertical-align: middle;
  line-height: 1;
}
.name {
  margin-right: 16px;
}
</style>

<script>
export default require('./index.js')
</script>
