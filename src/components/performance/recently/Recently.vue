<template>
  <div>
    <div
      v-for="(item, idx) in performances.recently[type]"
      :key="item.name"
    >
      <h3>{{item.name}} Action <span class="count" v-bind:style="countStyle(idx)">{{item.actions.length}}</span></h3>
      <ul>
        <li
          v-for="(action, idx) in item.actions" :key="idx"
        ><span>{{action.date}}</span> {{action.name}}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.count {
  background-color: #000;
  color: #fff;
  border-radius: 50%;
  display: inline-block;
  text-align: center;
  width: 38px;
}
</style>

<script>
export default require('./index.js')
</script>
