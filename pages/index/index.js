// 0 引入用来发送请求的方法，一定要把路径补全
import { request } from "../../request/index.js";
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 轮播图数组
    swiperList:[],
    // 导航数组
    cateList:[],
    // 楼层数据
    floorList:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  // 页面开始加载就会触发
  onLoad: function (options) {
     // 1. 发送异步请求获取轮播图数据 优化的手段可以通过es6的promise来解决这个问题
    // wx.request({
    //   url: 'https://api-hmugo-web.itheima.net/api/public/v1/home/swiperdata',
    //   success:(result)=>{
    //     this.setData({
    //       swiperList:result.data.message
    //     })
    //   }
    // })
     this.getSwiperList();
     this.getCateList();
     this.getFloorList();
  },

  // 获取轮播图数据
  getSwiperList(){
    request({url:'/home/swiperdata'})
    .then(res=>{
      console.log(res)
      this.setData({
        swiperList:res.data.message
      })
    })
  },
  
  // 获取分类导航数据
  getCateList(){
    request({url:'/home/catitems'})
    .then(res=>{
      this.setData({
        cateList:res.data.message
      })
    })
  },

  // 获取楼层数据
  getFloorList(){
    request({url:'/home/floordata'})
    .then(res=>{
      this.setData({
        floorList:res.data.message
      })
    })
  }

})