//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    winetag: 'wine',
    hoteltag: 'hotel',
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgs: ['/img/pic1.jpg', '/img/pic2.jpg', '/img/pic3.jpg', '/img/pic4.jpg'],
    productList: [{
      id:0,
      url: '/img/product1.jpg',
      name: '荔仙庄园葡萄酒',
      sale:'620.00',
      price:'860.00',
      usa: '8.2',
    }, {
        id:1,
        url: '/img/product2.jpg',
        name: '荔仙庄园葡萄酒',
        sale: '620.00',
        price: '860.00',
        usa: '8.2',
      }, {
        id: 2,
        url: '/img/product3.jpg',
        name: '荔仙庄园葡萄酒',
        sale: '620.00',
        price: '860.00',
        usa: '8.2',
      }],
      addresslist: [{
        title: "三木铁板日本料理",
        address: "茅台路179号金虹桥商场L310(近娄山关路)",
        phone: "021-62580760",
        time: "11:00-21:00",
        distance: "8.15"
      }, {
          title: "日本寿司料理",
          address: "茅台路179号金虹桥商场L310(近娄山关路)",
          phone: "021-62580760",
          time: "11:00-21:00",
          distance: "6.5"
        }, {
          title: "韩国泡菜",
          address: "茅台路179号金虹桥商场L310(近娄山关路)",
          phone: "021-62580760",
          time: "11:00-21:00",
          distance: "6.5"
        }, {
          title: "日本寿司料理",
          address: "茅台路179号金虹桥商场L310(近娄山关路)",
          phone: "021-62580760",
          time: "11:00-21:00",
          distance: "6.5"
        }, {
          title: "日本寿司料理",
          address: "茅台路179号金虹桥商场L310(近娄山关路)",
          phone: "021-62580760",
          time: "11:00-21:00",
          distance: "6.5"
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
  },
  goMore() {
    wx.navigateTo({
      url: '/component/more/more',
    })
  },
  moreFn(e) {
    // e.detail中就是子组件传递的数据
    console.log('查看更多',e)
    let gopage = e.detail.tag;
    console.log(gopage)
    if(gopage == 'wine') {
      console.log('去美酒列表页面')
      // 去美酒列表页面
      wx.switchTab({
        url: '/pages/tabBar/winelist/winelist'
      })
    } else if (gopage == 'hotel') {
      console.log('去饭店列表页面')
      // 去饭店列表页面
      wx.switchTab({
        url: '/pages/tabBar/hostlist/hostlist'
      })
    }
  },
  goHotelDetail() {
    wx.navigateTo({
      url: '/pages/subsidy/hoteldetail/hoteldetail',
    })
  },
  addCar(e) {
    // 子组件传递过来的数据
    let curId = e.detail.id
    wx.switchTab({
      url: '/pages/tabBar/shoppingcar/shoppingcar'
    })
  }
})
