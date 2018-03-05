<template>
  <form @submit="onAddPerformance" v-if="performanceNames">
    <input
      ref="newPerformance"
      v-model="field.newPerformance"
      v-bind:placeholder="'add ' + type + ' action'"
      @focus="onFocusAddField"
      @blur="onBlurAddField"
    >
    <div
      v-if="isAddFieldFocused && actionNames.length"
      class="panel"
    >
      <a
        v-for="name in actionNames" :key="name"
        @click="onClickAddActionName"
      >{{name}}</a>
    </div>

  </form>
</template>

<style scoped>
input {
  padding: 8px;
  margin: 8px 0;
  width: 400px;
  border-radius: 4px;
  border: solid 1px #eee;
  border-top: solid 1px #ccc;
  border-left: solid 1px #ccc;
  border-right: solid 1px #ccc;
  background-color: #fafafa;
  display: block;
}
input:focus {
  outline: 0;
}

.panel {
  margin-top: -10px;
  position: absolute;
  min-width: 416px;
  background-color: #fff;
  border:solid 1px #ccc;
}
.panel a{
  padding: 8px;
  display: block;
}
.panel a:hover{
  background-color: #000;
  color: #fff;
}
</style>

<script>
export default require('./index.js')
</script>
