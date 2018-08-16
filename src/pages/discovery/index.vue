<template>
  <div class="container discovery">
    <v-header vClass="img-move-bottom" title="Ta宠" align="left" :showBack="false"></v-header>
    <div class="top-tab">
      <div class="menu-wrap flex flex-row">
        <span class="items flex1" @click="tabClick(1)" :class="tabType==1?'active':''">精选</span>
        <span class="items flex1" @click="tabClick(2)" :class="tabType==2?'active':''">关注</span>
      </div>
    </div>
    <div class="list">
      <div class="list-card">
        <div class="user flex flex-row">
          <div class="avatar">
            <img src="/static/images/pic_12.png" mode="widthFix" />
          </div>
          <div class="user-info flex1">
            <p class="user-name">
              <span class="owner-name">李小七/</span>
              <span class="pet-name">米粒儿</span>
            </p>
            <p class="signature">吃葡萄不吐葡萄皮儿</p>
          </div>
          <div class="attention-status">
            <span class="icon"></span>
            <span class="text">关注</span>
          </div>
        </div>
        <div class="card-content">
          <div class="image-wrap flex flex-row single">
            <div class="image">
              <img src="/static/images/discovery_03.png" mode="widthFix" />
            </div>
          </div>
          <div class="text-wrap" @click="toDetail(1)">今天米修被我领回家啦！一只双子座的狗狗哦！刚满月几天。</div>
        </div>
        <div class="flex flex-row card-actions">
          <div class="praise">
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

      <div class="list-card">
        <div class="user flex flex-row">
          <div class="avatar">
            <img src="/static/images/pic_12.png" mode="widthFix" />
          </div>
          <div class="user-info flex1">
            <p class="user-name">
              <span class="owner-name">李小七/</span>
              <span class="pet-name">米粒儿</span>
            </p>
            <p class="signature">吃葡萄不吐葡萄皮儿</p>
          </div>
          <div class="attention-status">
            <span class="icon"></span>
            <span class="text">关注</span>
          </div>
        </div>
        <div class="card-content">
          <div class="image-wrap flex flex-row double">
            <div class="image">
              <img src="/static/images/discovery_21.png" mode="widthFix" />
            </div>
            <div class="image">
              <img src="/static/images/discovery_23.png" mode="widthFix" />
            </div>
          </div>
          <div class="text-wrap">今天米修被我领回家啦！一只双子座的狗狗哦！刚满月几天。</div>
        </div>
        <div class="flex flex-row card-actions">
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

      <div class="list-card">
        <div class="user flex flex-row">
          <div class="avatar">
            <img src="/static/images/pic_12.png" mode="widthFix" />
          </div>
          <div class="user-info flex1">
            <p class="user-name">
              <span class="owner-name">李小七/</span>
              <span class="pet-name">米粒儿</span>
            </p>
            <p class="signature">吃葡萄不吐葡萄皮儿</p>
          </div>
          <div class="attention-status followed">
            <span class="icon"></span>
            <span class="text">已关注</span>
          </div>
        </div>
        <div class="card-content">
          <div class="image-wrap flex flex-row three">
            <div class="image">
              <img src="/static/images/discovery_31.png" mode="widthFix" />
            </div>
            <div class="image">
              <img src="/static/images/discovery_33.png" mode="widthFix" />
            </div>
            <div class="image">
              <img src="/static/images/discovery_35.png" mode="widthFix" />
            </div>
          </div>
          <div class="text-wrap">今天米修被我领回家啦！一只双子座的狗狗哦！刚满月几天。</div>
        </div>
        <div class="flex flex-row card-actions">
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
    </div>
  </div>
</template>

<script>
import header from '@/components/header'
import { host_dev } from '../../utils/base'
export default {
  data () {
    return {
      tabType: 1,
      page: 1,
      listData: [],
    }
  },
  components: {
    'vHeader': header,
  },
  beforeMount() {
    this.getData();
  },
  methods:{
    toDetail(id){
      wx.navigateTo({ url:'../discoverydetail/main' });
    },
    tabClick(i){
      this.tabType = i;
      this.getData(true);
    },
    getData(restetPage){
      if(restetPage){this.page=1;}
      wx.request({
          url:`${host_dev}/wx/dynamic`,
          method: 'GET',
          data: {
              session: wx.getStorageSync('sessionId'),
              pageNumber: this.page,
              pageSize: 10,
          },
          success: res =>{
              console.log(res);
              if(restetPage){this.listData = [];}
              this.listData.concat(res.data.data.list);
          }
      });
    }
  },
  onReachBottom(){
    this.page++;
    this.getData(false);
  }
}
</script>

<style lang="scss">
@keyframes likeAnim {
  0%{
    transform: scale(1.3);
  }
  100%{
    transform: scale(1);
  }
}
.discovery{
  padding-top: 220rpx;
  .img-move-bottom{
    .headerbgbox{
      bottom: -66rpx;
    }
  }
  .top-tab{
    width: 100%;
    height: 70rpx;
    background: linear-gradient(to right, #FF4A46 , #FF603D);
    position: fixed;
    z-index: 99;
    left: 0;
    top: 148rpx;
    .menu-wrap{
      height: 100%;
      line-height: 70rpx;
      width: 270rpx;
      margin: auto;
      .items{
        text-align: center;
        color: #fff;
        opacity: 0.3;
        font-size: 30rpx;
        transition: all 0.3s;
        &.active{
          position: relative;
          color: #fff;
          opacity: 1;
          &::after{
            content: '';
            display: block;
            width: 60rpx;
            height: 3rpx;
            border-radius: 3rpx;
            background-color: #fff;
            position: absolute;
            bottom: 3rpx;
            left: 50%;
            transform: translate(-50%, 0);
          }
        }
      }
    }
  }
  .list{
    width: 100%;
    padding: 24rpx;
    .list-card{
      background-color: #fff;
      border-radius: 10rpx;
      padding: 24rpx;
      box-shadow:0px 0px 6px rgba(0,0,0,0.1);
      margin-bottom: 20rpx;
      .user{
        width: 100%;
        height: 72rpx;
        .avatar{
          flex: 0 0 72rpx;
          height: 72rpx;
          overflow: hidden;
          image{
            width: 100%;
          }
        }
        .user-info{
          padding-left: 24rpx;
          .user-name{
            font-size: 28rpx;
            line-height: 30rpx;
            .owner-name{
              color: #1E1E1E;
            }
            .pet-name{
              margin-left: 5rpx;
              color: #FF4E44
            }
          }
          .signature{
            font-size: 24rpx;
            color: #909090;
            line-height: 24rpx;
            margin-top: 10rpx;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
        .attention-status{
          flex: 0 0 126rpx;
          height: 52rpx;
          position: relative;
          top: 10rpx;
          border: 1rpx solid #DCDCDC;
          text-align: center;
          line-height: 50rpx;
          color: #FF5D3E;
          font-size: 28rpx;
          border-radius: 6rpx;
          .icon{
            display: inline-block;
            width: 28rpx;
            height: 100%;
            vertical-align: top;
            background-repeat: no-repeat;
            background-size: 24rpx auto;
            background-position: center;
            background-image: url(../../icons/discovery_attention.png);
          }
          .text{
            position: relative;
            top: -2rpx;
          }
          &.followed{
            border-style: dashed;
            color: #C8C8C8;
            .icon{
              display: none;
            }
          }
        }
      }
      .card-content{
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
      .card-actions{
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
  }
}
</style>

