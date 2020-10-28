// components/more
Component({
  properties: {
    passVal: String,
    passhotelVal: String
  },
  data: {

  },
  methods: {
    handleTap(e) {
      let curTag = this.properties.passVal
      if(curTag == 'wine') {
        this.triggerEvent("lookDetail", { tag: 'wine' })
      } else if (curTag == 'hotel') {
        this.triggerEvent("lookDetail", { tag: 'hotel' })
      }
    }
  }
})

