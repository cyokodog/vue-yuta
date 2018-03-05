import { chartColors } from '../../../shared/models/performance/definitions'

export default {
  name: 'PerformanceRecently',
  props: {
    type: ''
  },
  computed: {
    performances () {
      return this.$store.state.db.performances
    }
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
        // background: '#000',
        color: '#fff'
      }
    }
  }
}
