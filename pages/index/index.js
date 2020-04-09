// pages/index/index.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
     
  },

  handleShowToast(name){
    wx.showToast({
      title: name,
      icon:'loading',
      duration: 2000,
      mask:true,
      success:function(){
        console.log('加载成功')
      },
      fail:function(){
        console.log('加载失败')

      },
      complete:function(){
        console.log('加载完成')

      }
    })
  },
  handleShowModal(){
    wx.showModal({
      title: '我是标题',
      content: '我是内容',
      success:function(option){
        console.log(option)
      }
    })
  },
  handleShowLoading(){
    wx.showLoading({
      title: '加载',
    })

    setTimeout(function(){
      wx.hideLoading()
    },1000)
  },

  handleShowActionSheet(){
    wx.showActionSheet({
      itemList: ['衣服','裤子','袜子'],
      itemColor: '#0000FF',
      success:(res)=>{
          const index = res.tapIndex;
          if (index == 0){
            this.handleShowToast('衣服')
          } else if(index == 1){
            this.handleShowToast('裤子')
          } else if (index == 2) {
            this.handleShowToast('袜子')

          }
      }
    })
  },
  onShareAppMessage:function(res){
    return {
      title: 'hello,world',
      path: '/pages/about/about',
      imageUrl: 'http://s3.mogucdn.com/mlcdn/c45406/170915_0a93207ci28kelh617k4hh62l65lb_640x960.jpg'
    },
    console.log(res)
  }
  

})