<template>
  <div class="container">
    <v-header title="Ta宠" :showBack="false"></v-header>
    <view class='list'>
      <swiper class="swiper" previous-margin="140rpx" next-margin="140rpx" @change="swiperChange" indicator-dots="true" autoplay="true" interval="5000" duration="1000">
        <block v-for="(item, index) in movies" :index="index" :key="index">
          <swiper-item>
            <p :class="swiperIndex == index ? 'active' : ''">fasdaa</p>
            <!-- <image  src="../../images/discovery_active.png"></image> -->
          </swiper-item>
        </block>
      </swiper>
    <!-- <swiper indicator-dots="{{true}}" autoplay="{{false}}" previous-margin="{{'140rpx'}}" next-margin="{{'140rpx'}}" bindchange="swiperChange">
      <block wx:for="{{imgUrls}}" wx:key="{{index}}">
        <swiper-item>
          <view>{{index}}</view>
        </swiper-item>
      </block>
    </swiper> -->
  </view>
  </div>
</template>

<script>
import card from '@/components/card'
import header from '../../components/header'

export default {
  data () {
    return {
      motto: 'Hello World',
      userInfo: {},
      movies:3,
      swiperIndex: 0
    }
  },

  components: {
    card,
    'vHeader': header
  },

  methods: {
    bindViewTap () {
      const url = '../logs/main'
      wx.navigateTo({ url })
    },
    getUserInfo () {
      // 调用登录接口
      wx.login({
        success: () => {
          wx.getUserInfo({
            success: (res) => {
              this.userInfo = res.userInfo
            }
          })
        }
      })
    },
    swiperChange(e) {
      this.swiperIndex = e.target.current;
      // console.log(e)
    }
  },

  created () {
    // 调用应用实例的方法获取全局数据
    this.getUserInfo()
  }
}
</script>

<style scoped>

swiper{
  width: 750rpx;
  height: 900rpx;
}
swiper-item{
  padding-top: 100rpx;
}
p{
  width: 375rpx;
  height: 667rpx;
  position: absolute;
  left: 50%;
  margin-left: -188rpx;
}
p.active{
  transform: scale(1.2);
  transition:all .2s ease-in 0s;
}
</style>
