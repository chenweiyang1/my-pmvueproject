<script>
import {host_dev} from './utils/base'
export default {
  created () {
    
    
  },
  login: function(){
    let _that = this;
    return new Promise(function(resolve, reject) {
      wx.login({
        success: res => {
          console.log(res);
          if(res.code){
            wx.request({
              url: `${host_dev}/wx/login`,
              method: 'GET',
              data: {
                code: res.code,
              },
              success: res =>{
                console.log(res)
                let sessionId = res.data.sessionId;
                resolve(sessionId);
                wx.getUserInfo({
                  success: (res) => {
                    wx.request({
                      url:`${host_dev}/wx/login/info`,
                      method: 'GET',
                      data: {
                        signature: res.signature,
                        rawData: res.rawData,
                        encryptedData: res.encryptedData,
                        iv: res.iv,
                        sessionId: sessionId,
                      },
                      success: res =>{}
                    });
                  }
                });
              }
            });
          } else {
            console.log('登录失败'+res.errMsg);
          }
        }
      })
    });
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
