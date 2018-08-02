<template>
  <div class="message container">
    <v-header title="Ta宠" align="center" :showBack="false"></v-header>
    <ul class="message-list">
      <li class="system-msg msg flex flex-row">
        <div class="avatar">
          <img src="/static/images/pic_12.png" mode="widthFix" />
        </div>
        <div class="flex1 message-preview">
          <p class="sender-name">李小七</p>
          <p class="preview">你的猫咪好漂亮，平常都喂什么猫粮</p>
        </div>
        <div class="time-counter">
          <p class="time">15:00</p>
          <p class="message-count">2</p>
        </div>
      </li>
      <li class="msg flex flex-row">
        <div class="avatar">
          <img src="/static/images/pic_12.png" mode="widthFix" />
        </div>
        <div class="flex1 message-preview">
          <p class="sender-name">李小七</p>
          <p class="preview">你的猫咪好漂亮，平常都喂什么猫粮</p>
        </div>
        <div class="time-counter">
          <p class="time">15:00</p>
          <!-- <p class="message-count">2</p> -->
        </div>
      </li>
      <li class="msg flex flex-row">
        <div class="avatar">
          <img src="/static/images/pic_12.png" mode="widthFix" />
        </div>
        <div class="flex1 message-preview">
          <p class="sender-name">李小七</p>
          <p class="preview">你的猫咪好漂亮，平常都喂什么猫粮</p>
        </div>
        <div class="time-counter">
          <p class="time">15:00</p>
          <!-- <p class="message-count">2</p> -->
        </div>
      </li>
      <li class="msg flex flex-row">
        <div class="avatar">
          <img src="/static/images/pic_12.png" mode="widthFix" />
        </div>
        <div class="flex1 message-preview">
          <p class="sender-name">李小七</p>
          <p class="preview">你的猫咪好漂亮，平常都喂什么猫粮</p>
        </div>
        <div class="time-counter">
          <p class="time">15:00</p>
          <!-- <p class="message-count">2</p> -->
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import header from '../../components/header'
export default {
  data(){
    return{

    }
  },
  methods: {
    
  },
  beforeMount: function(){

  },
  components:{
    'v-header':header
  }
}
</script>

<style lang="scss" scoped>
.message{
  .message-list{
    width: 100%;
    .msg{
      padding: 32rpx 24rpx;
      background-color: #fff;
      position: relative;
      .avatar{
        flex: 0 0 88rpx;
        height: 88rpx;
        overflow: hidden;
        border-radius: 50%;
        img{
          width: 100%;
        }
      }
      .message-preview{
        padding-left: 32rpx;
        padding-right: 20rpx;
        .sender-name{
          font-size: 30rpx;
          color: #1E1E1E;
          line-height: 40rpx;
          margin-bottom: 20rpx;
        }
        .preview{
          font-size: 26rpx;
          color: #909090;
          line-height: 26rpx;
          overflow: hidden;
          white-space: nowrap;
          text-overflow: ellipsis;
        }
      }
      .time-counter{
        flex: 0 0 72rpx;
        text-align: right;
        .time{
          font-size: 24rpx;
          color: #c8c8c8;
          line-height: 40rpx;
        }
        .message-count{
          display: inline-block;
          width: 40rpx;
          height: 40rpx;
          line-height: 36rpx;
          text-align: center;
          white-space: nowrap;
          color: #fff;
          font-size: 24rpx;
          border-radius: 50%;
          background-color: #F5273B;
        }
      }
      &:after{
        content: '';
        width: calc(100% - 48rpx);
        height: 1rpx;
        background-color: #F0F0F0;
        position: absolute;
        bottom: 1rpx;
        left: 24rpx;
      }
      &:last-child{
        &::after{
          content: none;
        }
      }
      &.system-msg{
        margin-bottom: 14rpx;
        &::after{
          content: none;
        }
      }
    }
  }
}
</style>
