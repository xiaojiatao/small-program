//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    hotelList: [{
      url: '/img/hotel1.jpg',
      name: '三木铁板日本料理',
      address:'茅台路179号金虹',
      phone:'021-62580765',
      time: '11:00-12:00',
      distance: '12.5'
    }, {
        url: '/img/hotel2.jpg',
        name: '韩国泡菜',
        address: '浙江省杭州市',
        phone: '021-62580765',
        time: '11:00-12:00',
        distance: '9.5'
      }, {
        url: '/img/hotel3.jpg',
        name: '韩国泡菜',
        address: '浙江省杭州市',
        phone: '021-62580765',
        time: '11:00-12:00',
        distance: '9.5'
      }, {
        url: '/img/hotel4.jpg',
        name: '韩国泡菜',
        address: '浙江省杭州市',
        phone: '021-62580765',
        time: '11:00-12:00',
        distance: '9.5'
      }],
    latitude: 23.099994,
    longitude: 113.324520,
    markers: [{
      id: 1,
      latitude: 23.099994,
      longitude: 113.324520,
      name: 'T.I.T 创意园'
    }],
    covers: [{
      latitude: 23.099994,
      longitude: 113.344520,
      iconPath: '/image/location.png'
    }, {
      latitude: 23.099994,
      longitude: 113.304520,
      iconPath: '/image/location.png'
    }]
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
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
