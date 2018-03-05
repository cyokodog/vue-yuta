<template>
<div class="st-Chart">
<div class="st-Chart_Container">

  <div class="st-Chart_Item">

    <h2>Bad Actions</h2>
    <PerformanceChart
      v-if="performances.isReady"
      :performances="performances"
      :type="'bad'"
    >
    </PerformanceChart>
    <Commands
      v-if="performances.isReady"
      :type="'bad'"
      :performanceNames="performances.summary.bad.categories"
    ></Commands>
    <PerformanceRecently :type="'bad'"></PerformanceRecently>

  </div>
  <div class="st-Chart_Item">

    <h2>Good Actions</h2>
    <PerformanceChart
      v-if="performances.isReady"
      :performances="performances"
      :type="'good'"
      :performanceNames="performances.summary.good.categories"
    >
    </PerformanceChart>
    <Commands
      v-if="performances.isReady"
      :type="'good'"
      :performanceNames="performances.summary.good.categories"
     ></Commands>
    <PerformanceRecently :type="'good'"></PerformanceRecently>
  </div>

</div>
</div>
</template>

<script>
export default require('./index.js')
</script>
