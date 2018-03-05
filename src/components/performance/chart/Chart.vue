<template>
  <div class="chart-Container">
    <div v-bind:class="{ [areaClass]: true }" v-if="performances.isReady"></div>
    <div v-else>now rendering</div>
  </div>
</template>

<style scoped>
.chart-Container{
  border: solid 1px #ddd;
  box-sizing: border-box;
  min-height: 430px;
}
</style>

<script>
export default require('./index.js')
</script>
