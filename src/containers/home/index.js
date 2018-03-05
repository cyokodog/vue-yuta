import Commands from '../../components/performance/commands/Commands.vue'
import PerformanceChart from '../../components/performance/chart/Chart.vue'
import PerformanceRecently from '../../components/performance/recently/Recently.vue'

export default {
  name: 'Home',
  components: {
    Commands,
    PerformanceChart,
    PerformanceRecently
  },
  computed: {
    performances () {
      return this.$store.state.db.performances
    }
  }
}
