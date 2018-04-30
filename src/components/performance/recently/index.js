import { chartColors } from '../../../shared/models/performance/definitions'

export default {
  name: 'PerformanceRecently',
  props: {
    type: '',
    performanceNames: '',
    performances: ''
  },
  methods: {
    countStyle (idx) {
      if (idx) {
        return {
          background: chartColors.default,
          color: '#000'
        }
      }
      return {
        background: chartColors[this.type],
        color: '#fff'
      }
    }
  }
}
