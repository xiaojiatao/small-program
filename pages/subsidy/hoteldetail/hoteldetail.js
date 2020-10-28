//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    listdetail: {
      url: "/img/ban-hotel.jpg",
      title: "三木铁板日本料理",
      desc: "超值二人自助餐,免费wifi,新鲜海鲜,限量抢购!另有其他套餐可选",
      detail: ['/img/detail-hotel1.jpg', '/img/detail-hotel2.jpg']

    }
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
