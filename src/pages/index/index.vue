<template>
  <div class="container index">
    <v-header title="Ta宠" align="center" :showBack="false"></v-header>
    <view class='list'>
      <swiper class="swiper" previous-margin="55rpx" next-margin="44rpx" duration="500">
        <block v-for="(item, index) in movies" :index="index" :key="index">
          <swiper-item>
            <div class="pet-card">
              <div class="pic1">
                <image src="/static/images/pic_03.png" mode="widthFix"></image>
              </div>
              <div class="flex flex-row pic-s-wrap">
                <div class="flex1 pic-s">
                  <image src="/static/images/pic_06.png" mode="widthFix"></image>
                </div>
                <div class="flex1 pic-s">
                  <image src="/static/images/pic_08.png" mode="widthFix"></image>
                </div>
              </div>
              <div class="pet-info flex flex-row">
                <div class="avatar-wrap">
                  <image src="/static/images/pic_12.png" mode="widthFix"></image>
                </div>
                <div class="flex1 texts">
                  <p class="pet-name">
                    <span class="name">米粒儿</span>
                    <pet-status :isSterilization="true" gender=0 />
                  </p>
                  <p class="signature">吃葡萄不吐葡萄皮儿</p>
                </div>
              </div>
              <div class="pet-other-info flex flex-row">
                <div class="flex1">
                  <span class="icon birthday"></span>
                  <span class="text">3岁</span>
                </div>
                <div class="flex1">
                  <span class="icon aries"></span>
                  <span class="text">白羊</span>
                </div>
                <div class="flex1">
                  <span class="icon position"></span>
                  <span class="text">同城</span>
                </div>
              </div>
            </div>
          </swiper-item>
        </block>
      </swiper>
    </view>
    <button plain class="add-my-pet" @click="addPet">添加我的宠物</button>
  </div>
</template>

<script>
import petStatus from '@/components/petStatus'
import header from '../../components/header'
import { host_dev } from '../../utils/base'
export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      movies:30,
      swiperIndex: 0
    }
  },

  components: {
    petStatus,
    'vHeader': header
  },

  methods: {
    addPet () {
      const url = '../addmypet/main'
      wx.navigateTo({ url })
    },
    swiperChange(e) {
      this.swiperIndex = e.target.current;
      // console.log(e)
    }
  },

  created () {
    wx.request({
        url:`${host_dev}/wx/user/xxxx`,
        method: 'POST',
        data: {
            // signature: res.signature,
            // rawData: res.rawData,
            // encryptedData: res.encryptedData,
            // iv: res.iv,
            session: wx.getStorageSync('sessionId'),
        },
        success: res =>{
            // console.error(res)
        }
    });
    
    // 调用应用实例的方法获取全局数据
    // this.getUserInfo()
  }
}
</script>

<style scoped>

swiper{
  width: 770rpx;
  height: 740rpx;
  padding-top: 42rpx;
}
.list{
  width: 100%;
}
.list .swiper{
  width: 100%;
  height: 740rpx;
}
.list .swiper swiper-item{
  
  padding-right: 22rpx;
}
.list .swiper swiper-item .pet-card{
  padding: 13px;
  width: calc(100% - 10rpx);
  margin-left: 10rpx;
  position: relative;
  top: 5px;
  height: 720rpx;
  background-color: #fff;
  border-radius: 5px;
  box-shadow:0px 0px 10px rgba(242,65,30,0.16);
  
  /* margin-right: 22rpx; */
}
.list .swiper swiper-item .pet-card .pic1{
  width: 100%;
  height: 130px;
  overflow: hidden;
  margin-bottom: 8px;
}
.list .swiper swiper-item .pet-card .pic1 image{
  width: 100%;
}
.list .swiper swiper-item .pet-card .pic-s-wrap{
  width: 100%;
  height: 90px;
  justify-content: space-between;
}
.list .swiper swiper-item .pet-card .pic-s-wrap .pic-s{
  /* flex: 0 0 250rpx; */
  overflow: hidden;
}
.list .swiper swiper-item .pet-card .pic-s-wrap .pic-s:first-child{
  padding-right: 5px;
}
.list .swiper swiper-item .pet-card .pic-s-wrap .pic-s:last-child{
  padding-left: 5px;
}
.list .swiper swiper-item .pet-card .pic-s-wrap .pic-s image{
  width: 100%;
}
.list .swiper swiper-item .pet-card .pet-info{
  margin-top: 30rpx;
  height: 110rpx;
  border-bottom: 1rpx solid #F1F1F1;
}
.list .swiper swiper-item .pet-card .pet-info .avatar-wrap{
  flex: 0 0 80rpx;
  height: 80rpx;
  border-radius: 50%;
  overflow: hidden;
}
.list .swiper swiper-item .pet-card .pet-info .avatar-wrap image{
  width: 100%;
}
.list .swiper swiper-item .pet-card .pet-info .texts{
  padding: 5rpx 0 0 16rpx;
}
.list .swiper swiper-item .pet-card .pet-info .texts .pet-name{
  line-height: 30rpx;
  font-size: 30rpx;
  color: #1E1E1E;
}
.list .swiper swiper-item .pet-card .pet-info .texts .pet-name .name{
  margin-right: 19rpx;
}
.list .swiper swiper-item .pet-card .pet-info .texts .signature{
  font-size: 28rpx;
  margin-top: 5rpx;
  color: #909090;
}
.list .swiper swiper-item .pet-card .pet-other-info{
  margin-top: 30rpx;
}
.list .swiper swiper-item .pet-card .pet-other-info .flex1{
  line-height: 28rpx;
  font-size: 28rpx;
  color: #1E1E1E;
  text-align: center;
}
.list .swiper swiper-item .pet-card .pet-other-info .flex1 .icon{
  display: inline-block;
  width: 35rpx;
  height: 28rpx;
  vertical-align: middle;
  position: relative;
  bottom: 2rpx;
  background-repeat: no-repeat;
  background-position: center;
  margin-right: 5rpx;
}
.list .swiper swiper-item .pet-card .pet-other-info .flex1 .icon.birthday{
  background-image: url(../../icons/birthday.png);
  background-size: 34rpx auto;
}
.list .swiper swiper-item .pet-card .pet-other-info .flex1 .icon.aries{
  background-image: url(../../icons/aries.png);
  background-size: 22rpx auto;
}
.list .swiper swiper-item .pet-card .pet-other-info .flex1 .icon.position{
  background-image: url(../../icons/position.png);
  background-size: 24rpx auto;
}
.add-my-pet{
  margin-top: 108rpx;
  width: 562rpx;
  height: 86rpx;
  border-radius: 86rpx;
  border: none;
  line-height: 84rpx;
  text-align: center;
  color: #fff;
  font-size: 36rpx;
  background: -webkit-linear-gradient(left, #FF4A46 , #FF603D); /* Safari 5.1 - 6.0 */
  background: -o-linear-gradient(right, #FF4A46, #FF603D); /* Opera 11.1 - 12.0 */
  background: -moz-linear-gradient(right, #FF4A46, #FF603D); /* Firefox 3.6 - 15 */
  background: linear-gradient(to right, #FF4A46 , #FF603D); /* 标准的语法 */
  transition: all 0.15s;
}
.add-my-pet.button-hover{
  box-shadow:0px 0px 18px rgba(255,75,70,0.3);
  opacity: 0.9;
}
</style>
