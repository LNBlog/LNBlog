// pages/log/log.js
import formatTime from "./../../utils/util.js";
const get = require("./../../utils/request.js");
const api = require('./../../utils/api.js');
Page({

  /**
   * 页面的初始数据
   */
  data: {
    show: false
  },
 
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const that = this;
    get.GET(api.API_getNewsList, { pageNum: 1, pageSize: 4})
      .then(res => {
        console.log(22222222)
        const time = new Date(res.data.result[0].createTime);
        that.setData({
          news: res.data.result,
          createTime: formatTime.formatTime(time)
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
    this.setData({
      show: true,
    })
    const that = this;
    get.GET(api.API_getNewsList, { pageNum: 1, pageSize: 6 })
      .then(res => {
        const time = new Date(res.data.result[0].createTime);
        that.setData({
          show: false,
          news: res.data.result,
          createTime: formatTime.formatTime(time)
        })
      })
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})