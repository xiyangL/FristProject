// pages/index/index.js

Page({
  /**
   * 页面的初始数据
   */
  data: {
     count:0,
     itemCount:0
  },

  handleIncrement(event){
    this.setData({
      count: this.data.count+1
    })
  },

  clickBindtap(event){
    console.log('++++',event)
  },

  itemClickBtn(event){
    console.log(event)
    const index = event.detail.index;
    this.setData({
      itemCount : index,
    })
  },
  // 获取组件修改数据
  handleIncrementCpn() {
    //  通过class或者id拿到组件对象
    const my_sel = this.selectComponent('.sel_class');
    my_sel.handleIncrementCount(5)
  }
})

