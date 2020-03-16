App({
  onLaunch: function (options) {

    console.log("---111")
    console.log(options)

// 获取用户信息一
    wx.getUserInfo({
      success: function (res) {
        console.log(res)
      }
    })
  },

// 定义全局变量
globalData:{
  name:'lxy',
  age:20
}
})
