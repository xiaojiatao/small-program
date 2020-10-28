// components/carlist
Component({
  properties: {
    getlistdata: Array
  },
  options: {
    multipleSlots: true
  },
  data: {

  },
  methods: {
    plusNum(event) {
      var index = event.currentTarget.dataset['index'];
      var item = this.properties.getlistdata[index];
      console.log('减去',item)
      this.triggerEvent("plus", {
        number: item.number,
        index: index
      })
    },
    // 增加数量
    addNum(event) {
      let index = event.currentTarget.dataset['index']
      let item = this.properties.getlistdata[index]
      console.log('增加',item)
      this.triggerEvent("add", {
        number: item.number,
        index: index
      })
    },
    childDel(event) {
      let index = event.currentTarget.dataset['index']
      let item = this.properties.getlistdata[index]
      console.log('删除', item)
    }
  }
})