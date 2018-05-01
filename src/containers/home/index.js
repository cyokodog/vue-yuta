import { mapMutations, mapGetters } from 'vuex'

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
    ...mapGetters('performances', [
      'performances'
    ])
  },
  methods: {
    ...mapMutations('performances', [
      'addPerformance'
    ])
  }

}
