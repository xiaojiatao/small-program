//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgs: ['/img/pic1.jpg', '/img/pic2.jpg', '/img/pic3.jpg', '/img/pic4.jpg'],
    productList: [{
      url: '/img/product1.jpg',
      name: '荔仙庄园葡萄酒',
      sale:'620.00',
      price:'860.00',
      usa: '8.2',
    }, {
        url: '/img/product2.jpg',
        name: '荔仙庄园葡萄酒',
        sale: '620.00',
        price: '860.00',
        usa: '8.2',
      }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '/logs/logs'
    })
  },
  onLoad: function () {
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse){
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
