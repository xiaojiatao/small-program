// components/more
Component({
  properties: {
    childcomment: {
      type: Array,
      value: ""
    }
  },
  data: {

  },
  methods: {
    handleTap() {
      this.triggerEvent("lookDetail", { tag: 'wine' })
    }
  }
})

