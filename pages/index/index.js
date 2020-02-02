// pages/log/log.js
const formatTime = require('../../utils/util.js');
const get = require('./../../utils/request.js')

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
          banners: res.data.result.list
        })
      }
    }),

    get.GET('api/getNewsList', { pageNum: 1, pageSize: 6})
      .then(res => {
        const time = new Date(res.data.result[0].createTime);
        that.setData({
          news: res.data.result,
          formatTime: formatTime.formatTime(time)
        })
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