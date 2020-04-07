// components/w-tab-control/w-tab-control.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    items: {
      type: Array,
      value: [],
      observer: function (newVal, oldVal) {
        console.log(newVal, oldVal)
      }
    },
    itemIndex:{
      type:Number,
      value:0
    }
  },
  externalClasses: ['itemclass'],
  /**
   * 组件的初始数据
   */
  data: {
    oldIndex:0
  },


  /**
   * 组件的方法列表
   */
  methods: {
    clickItem(event){
      const index = event.currentTarget.dataset.index

      this.setData({
        oldIndex:index
      })

      this.triggerEvent('itemClick', {index}, {})
    }
  }
})
