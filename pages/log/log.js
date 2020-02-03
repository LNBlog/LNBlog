
//index.js
//获取应用实例
const app = getApp();
const get = require('./../../utils/request.js');
const api = require('./../../utils/api.js')


// pages/log/log.js
const IMAGEUTILS = require('../../utils/image.js');

Page({
  data: {
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

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    get.GET(api.API_getPictureList, { pageNum: 1, pageSize: 6})
      .then(res => {
        that.setData({
          banners: res.data.result.list
        })
      })
  },
  getUserInfo: function(e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
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
