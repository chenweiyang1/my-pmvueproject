<template>
  <div class="container discoverydetail">
    <v-header title="动态详情" align="center" :showBack="true"></v-header>
    <div class="dynamic-detail">
      <div class="user-line flex flex-row">
        <div class="avatar">
          <img src="/static/images/pic_12.png" mode="widthFix" />
        </div>
        <div class="flex1 user-name">
          <p class="name">李先生 | 米粒儿</p>
          <p class="signature">吃葡萄不吐葡萄皮儿</p>
        </div>
      </div>
      <div class="dynamic-content">
        <div class="image-wrap flex flex-row single">
          <div class="image">
            <img src="/static/images/discovery_03.png" mode="widthFix" />
          </div>
        </div>
        <div class="text-wrap">今天米修被我领回家啦！一只双子座的狗狗哦！刚满月几天。</div>
      </div>
      <div class="like-comment-share flex flex-row">
        <div class="praise liked">
          <span class="icon"></span>
          <span class="number">116</span>
        </div>
        <div class="comment">
          <span class="icon"></span>
          <span class="number">18</span>
        </div>
        <div class="share">
          <span class="icon"></span>
        </div>
      </div>
    </div>
    <div class="comment-list">
      <p class="flex flex-row title">
        <span class="flex1">全部评论</span>
        <span class="look-all">查看全部<span class="i"></span></span>
      </p>
      <comment />
    </div>
  </div>
</template>

<script>
import header from '../../components/header'
import comment from '../../components/commentitem';
import { host_dev } from '../../utils/base'
export default {
  data () {
    return {
      
    }
  },

  components: {
    'vHeader': header,
    comment
  },

  methods: {

  },

  beforeMount () {
    
  }
}
</script>

<style lang="scss">
.discoverydetail{
  .dynamic-detail{
    width: 100%;
    padding: 24rpx;
    background-color: #fff;
    box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
    .user-line{
      width: 100%;
      .avatar{
        flex: 0 0 70rpx;
        height: 70rpx;
        overflow: hidden;
        img{
          width: 100%;
        }
      }
      .user-name{
        padding-left: 26rpx;
        .name{
          font-size: 28rpx;
          color: #1E1E1E;
          line-height: 30rpx;
          margin-bottom: 10rpx;
        }
        .signature{
          font-size: 24rpx;
          color: #909090;
          line-height: 26rpx;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
        }
      }
    }
    .dynamic-content{
      margin-top: 24rpx;
      .image-wrap{
        .image{
          flex: 1;
          overflow: hidden;
          image{
            width: 100%;
          }
        }
        &.single{
          .image{
            flex: 0 0 480rpx;
            max-height: 360rpx;
          }
        }
        &.double{
          .image{
            max-height: 240rpx;
            &:first-child{
              padding-right: 3rpx;
            }
            &:last-child{
              padding-left: 3rpx;
            }
          }
        }
        &.three{
          .image{
            max-height: 170rpx;
            &:first-child{
              padding-right: 4rpx;
            }
            &:nth-child(2){
              padding: 0 2rpx;
            }
            &:last-child{
              padding-left: 4rpx;
            }
          }
        }
      }
      .text-wrap{
        font-size: 30rpx;
        color: #1E1E1E;
        line-height: 40rpx;
        margin-top: 20rpx;
      }
    }
    .like-comment-share{
      margin-top: 18rpx;
      border-top: 1rpx solid #EEEEEE;
      padding-top: 20rpx;
      .praise{
        margin-right: 100rpx;
        .icon{
          display: inline-block;
          width: 28rpx;
          height: 26rpx;
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 30rpx auto;
          background-image: url(../../icons/discovery_like.png);
          &.clicked{
            animation: likeAnim 0.5s 1 forwards;
            background-image: url(../../icons/discovery_liked.png);
          }
        }
        &.liked{
          .icon{
            background-image: url(../../icons/discovery_liked.png);
          }
        }
      }
      .comment{
        .icon{
          display: inline-block;
          width: 26rpx;
          height: 26rpx;
          background-repeat: no-repeat;
          background-position: left center;
          background-size: 27rpx auto;
          background-image: url(../../icons/discovery_comment.png);
        }
      }
      .number{
        margin-left: 16rpx;
        font-size: 26rpx;
        color: #909090;
        line-height: 26rpx;
        position: relative;
        top: -2rpx;
      }
    }
  }
  .comment-list{
    width: 100%;
    background-color: #fff;
    margin-top: 21rpx;
    box-shadow:0px 0px 6px 0px rgba(0,0,0,0.1);
    .title{
      padding: 24rpx;
      font-size: 28rpx;
      color: #1E1E1E;
      line-height: 30rpx;
      position: relative;
      .look-all{
        font-size: 26rpx;
        color: #909090;
        line-height: 30rpx;
        .i{
          display: inline-block;
          width: 20rpx;
          height: 30rpx;
          background-position: right center;
          background-repeat: no-repeat;
          background-size: 14rpx auto;
          background-image: url(../../icons/arrow_right.png);
          vertical-align: bottom;
        }
      }
      &:after{
        content: '';
        display: block;
        width: calc(100% - 48rpx);
        height: 1rpx;
        background-color: #E8E8E8;
        position: absolute;
        left: 24rpx;
        bottom: 1rpx;
      }
    }
  }
}
</style>
