// pages/user/dingdan.js
//index.js  
//获取应用实例  
var app = getApp();
//引入这个插件，使html内容自动转换成wxml内容
var WxParse = require('../../wxParse/wxParse.js');
var common = require("../../utils/common.js");
Page( {  
  data: {  
    // tab切换  
    tabArr: {
       curHdIndex: 0,
       curBdIndex: 0
    },
    content:{} 
  }, 
  content:{

  }, 
  onLoad: function(options) { 
    var that = this;
    wx.request({
      url: app.d.myUrl + '/Api/Web/aboutUs',
      method: 'post',
      data: {},
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        that.setData({
          list:res.data.err,
          nodeslist:res.data.nodeslist
        });
        that.loadcontent();
      },
    });
  },
  loadcontent:function(id){
    var that=this;
    if(!id){
      var list=that.data.list[0];
      var id = list.id;
    }
    wx.request({
      url: app.d.myUrl + '/Api/Web/getcontent',
      method: 'post',
      data: {
        id: id
      },
      header: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      success: function (res) {
        var content=res.data.err;
        that.content[id]=content;
        WxParse.wxParse('content_'+id, 'html', content, that, 3);
      },
    });
  },  
  initSystemInfo:function(){
    var that = this;  
    wx.getSystemInfo( {
      success: function( res ) {  
        that.setData( {  
          winWidth: res.windowWidth,  
          winHeight: res.windowHeight  
        });  
      }    
    });  
  },
  // tab切换
  tabFun: function (e) {
     //获取触发事件组件的dataset属性 
    var _datasetId = e.target.dataset.key;
    var id = e.target.dataset.id;
     console.log("----" + _datasetId + "----");
     var _obj = {};
     _obj.curHdIndex = _datasetId;
     _obj.curBdIndex = _datasetId;
     this.setData({
        tabArr: _obj
     });
     if(!this.content[id]){
       this.loadcontent(id);
     }else{
      //  console.log(this.content);
      //  WxParse.wxParse('content_'+id, 'html', this.content[id], this, 3);
     }
  },
})