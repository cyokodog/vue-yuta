export default {
  name: 'Commands',
  props: {
    type: '',
    performanceNames: ''
  },
  data () {
    return {
      field: {
        newPerformance: ''
      },
      isAddFieldFocused: false
    }
  },
  computed: {
    actionNames () {
      return this.performanceNames.filter(name => {
        const reg = new RegExp(this.field.newPerformance)
        return reg.test(name)
      })
    }
  },

  methods: {
    onAddPerformance () {
      this.$store.commit('addPerformance', {
        name: this.field.newPerformance,
        type: this.type
      })
      this.field.newPerformance = ''
      this.isAddFieldFocused = false
      return false
    },
    onFocusAddField () {
      this.isAddFieldFocused = true
    },
    onBlurAddField () {
      setTimeout(() => {
        this.isAddFieldFocused = false
      }, 100)
    },
    onClickAddActionName (e) {
      this.field.newPerformance = e.target.innerText
      this.$refs.newPerformance.focus()
    }
  }
}
