//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    listdetail: {
      url: "/img/ban-detail.jpg",
      title: "乐邦帝国干红葡萄酒",
      desc: "长久以来,我们在葡萄园中崇尚热气简单,自然和完美。这同时是我们的葡萄酒想要分享给大家的。",
      detail: ['/img/detail-1.jpg', '/img/detail-2.jpg', '/img/detail-3.jpg', '/img/detail-4.jpg']

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
