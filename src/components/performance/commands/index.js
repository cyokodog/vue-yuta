export default {
  name: 'Commands',
  props: {
    type: '',
    performanceNames: '',
    addPerformance: ''
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
    onAddPerformance (ev) {
      this.addPerformance({
        name: this.field.newPerformance,
        type: this.type
      })
      this.field.newPerformance = ''
      this.isAddFieldFocused = false
      ev.preventDefault()
    },
    onFocusAddField () {
      this.isAddFieldFocused = true
    },
    onBlurAddField () {
      setTimeout(() => {
        this.isAddFieldFocused = false
      }, 100)
    },
    onClickAddActionName (ev) {
      this.field.newPerformance = ev.target.innerText
      this.$refs.newPerformance.focus()
    }
  }
}
