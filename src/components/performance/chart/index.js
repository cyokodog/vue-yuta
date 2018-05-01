import * as Highcharts from 'highcharts'

import getChartParams from './getChartParams'

export default {
  name: 'PerformanceChart',
  props: {
    type: '',
    performances: Object
  },
  created () {
    setTimeout(() => {
      this.drawChart()
    }, 0)
  },
  updated () {
  },
  mounted () {
  },
  computed: {
    areaClass () {
      return `chart-Area-${this.type}`
    },
    chartData () {
      return this.performances.summary[this.type]
    }
  },
  methods: {
    drawChart () {
      const target = document.querySelector(`.${this.areaClass}`)
      const params = getChartParams(this.chartData.categories, this.chartData.series)
      Highcharts.chart(target, params)
    }
  }
}
