<script>
export default {
  created () {
    // 调用API从本地缓存中获取数据
    const logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    console.log('app created and cache logs by setStorageSync')
  }
}
</script>

<style>
view,text,input,textarea,button,
label,swiper-item{
  font-family: "Microsoft YaHei";
  box-sizing: border-box;
}
page{
  background-color: #f6f5f5;
}
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding-top: 75px;
  box-sizing: border-box;
}
.flex{
  display: flex;
}
.flex.flex-row{
  flex-direction: row;
}
.flex .flex1{
  flex: 1;
  width: 20%;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
