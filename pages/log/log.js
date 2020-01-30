// pages/log/log.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    wx.request({
      url: 'http://139.224.25.165:8066/api/getPictureList',
      data: {
        pageNum: 1,
        pageSize: 6
      },
      header: {
        'content-type': 'application/json;charset=utf-8' // 默认值 
      },
      success(res) {
        that.setData({
          banners: res.result
        })
        console.log(res, "67ffty")
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
    
  },

  // banners: function () {
  //   wx.request({
  //     url: 'http://139.224.25.165:8066/api/getPictureList',
  //     data: {
  //       pageNum: 1,
  //       pageSize: 6
  //     },
  //     header: {
  //       'content-type': 'application/json;charset=utf-8' // 默认值 
  //     },
  //     success(res) {
  //       this.setData({
  //         banners: res.result.list
  //       })
  //       console.log(res, "67ffty")
  //     }
  //   })
  // },
  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})