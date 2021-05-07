Page({
  data: {
    tabs:[
      {
        id:0,
        value:"综合",
        isActive:true
      },
      {
        id:1,
        value:"销量",
        isActive:false
      },
      {
        id:2,
        value:"价格",
        isActive:false
      }
    ]
  },
  // 接口要的参数
  QueryParams:{
    query:"",
    cid:"",
    pagenum:1,
    pagesize:10
  },

  onLoad: function (options) {
    this.QueryParams.cid = options.cid
  },

  

  // 标题点击事件 从子组件传递过来
  handleTabsChange(e){
    // console.log(e)
    // 1.获取被点击的标题索引
    const {index} = e.detail;
    // 2.修改原数组
    let {tabs} = this.data;
    tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)

    // 3.赋值到data中
    this.setData({
      tabs
    })
  }
})