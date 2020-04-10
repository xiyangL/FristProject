const TOKEN ='token'

App({
globalData:{
  token:''
},

onLaunch: function (options) {
  const token = wx.getStorageSync(TOKEN);
  if(token && token.length != 0){
    this.checkToken(token)
  } else{
    this.login()
  }
},

checkToken(token){
  console.log('执行了验证token操作')

  wx.request({
    url: 'http://123.207.32.32:3000/auth',
    method:'post',
    header:{
      token:token,
      success:(res) => {
        if(!res.data.errCode){
          this.globalData.token = token
        } else{
          this.login()
        }
      },
      fail:function(err){
        console.log(err)
      }

    }
  })
},

login(){
  console.log('执行了登录操作')

  wx.login({
    success:(res)=>{
      const code = res.code;
      wx.request({
        url: 'http://123.207.32.32:3000/login',
        method:'post',
        data:{
          code:code
        },
        success:(res)=>{
          const token = res.data.token;
          this.globalData.token = token;
          wx.setStorageSync(TOKEN, token)
        }
      })
    }
  })
},
getUserInfo(){
  // 获取用户信息一
  wx.getUserInfo({
    success: function (res) {
      console.log(res)
    }
  })
}

})
