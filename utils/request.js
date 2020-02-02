const baseUrl = "http://139.224.25.165:8066/";
const GET = (url, data) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url, //仅为示例，并非真实的接口地址
      data: data,
      method: 'GET',
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res){
        resolve(res)
      },
      fail(res) {
        reject(res)
      }
    })
  })
}

const POST = (url, data, header) => {
  return new Promise((resolve, reject) => {
    wx.request({
      url: baseUrl + url, //仅为示例，并非真实的接口地址
      data: data,
      method: 'POST',
      header: header,
      success(res) {
        resolve(res)
      },
      fail(res) {
        reject(res)
      }
    })
  })
}

module.exports = {
  GET,
  POST
}
