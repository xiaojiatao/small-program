//test.js
const app = getApp()
Page({
  data: {
  },

  onLoad: function (options) {
    var that = this;
    wx.request({
      url: 'http://bz.wuyoulu.cn/api/testxjt',
      method: 'POST',
      header: {
        'Content-Type': 'application/json'
      },
      success: function(res) {
        console.log(res.data)
        this.setData({
          resdata: res.data
        })
      },
      fail: function(res) {
        console.log('..fail...')
      }
    })
  },
})
