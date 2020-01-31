<<<<<<< HEAD
//index.js
//获取应用实例
const app = getApp()

=======
// pages/log/log.js
const IMAGEUTILS = require('../../utils/image.js');
>>>>>>> bbbb5b6a15882800132d1ee1be2185613c4a1b03
Page({
  data: {
<<<<<<< HEAD
    motto: 'hello',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function() {
    wx.navigateTo({
      url: '../logs/logs'
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
=======
    imageWidth: 0,
    imageHeight: 0
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
        console.log(res, '123')
        that.setData({
          banners: res.data.result.list
>>>>>>> bbbb5b6a15882800132d1ee1be2185613c4a1b03
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
<<<<<<< HEAD
=======
  },
  autoFix: function(e) {
   let imageSize =  IMAGEUTILS.imageUtil(e.detail.width, 200);
    this.setData({
      imageHeight: imageSize.imageHeight,
      imageWidth: imageSize.imageWidth
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

>>>>>>> bbbb5b6a15882800132d1ee1be2185613c4a1b03
  }
})
