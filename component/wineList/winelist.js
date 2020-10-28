// components/winelist
Component({
  properties: {
    winelist: Array
  },
  data: {

  },
  methods: {
    goCarFn(event) {
      var index = event.currentTarget.dataset['index'];
      var item = this.properties.winelist[index];
      this.triggerEvent("signCar", { id: item.id })
    },
    godetailFn() {
      console.log('')
      wx.navigateTo({
        url: "/pages/subsidy/winedetail/winedetail"
      })
    }
  }
})
