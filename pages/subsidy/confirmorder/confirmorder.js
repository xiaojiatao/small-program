//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    goodslist: [{
      url: '/img/car1.jpg',
      name: '3杯红酒',
      price: '20.00',
      number: 15
    }, {
        url: '/img/car2.jpg',
        name: '3杯红酒',
        price: '10.00',
        number: 1
      }, {
        url: '/img/car3.jpg',
        name: '3杯红酒',
        price: '30.00',
        number: 1
      }],
  },
  //事件处理函数
  plusFn(e) {
    // 子组件传递过来的数据
    // console.log('获取到子元素的数据',e,e.detail.number,e.detail.index)
    
    let curIndex = e.detail.index
    let curNum = e.detail.number
    if(curNum<=1) return false;

    this.setData({
      [`goodslist[${curIndex}]number`]: `${curNum-1}`
    })
  },
  addFn(e) {
    let curIndex = e.detail.index
    let curNum = e.detail.number
    this.setData({
      [`goodslist[${curIndex}]number`]: `${parseInt(curNum) + 1}`
    })
  },
  fatherDel(event) {
    console.log('进入删除方法',event)
    // 获取当前删除数据的索引值
    let index = event.currentTarget.dataset['index'];
    this.data.goodslist.splice(index,1)

    this.setData({
      goodslist: this.data.goodslist
    })
  }
})
