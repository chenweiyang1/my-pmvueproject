<template>
    <div class="comment-item flex flex-row">
        <div class="avatar">
            <img src="/static/images/pic_12.png" mode="widthFix"/>
        </div>
        <div class="flex1 text">
            <div class="user-name flex flex-row">
                <p class="name flex1">米粒儿</p>
                <div class="action">
                    <span class="like liked">116</span>
                    <span class="action-text">删除</span>
                </div>
            </div>
            <p class="time">3min前</p>
            <p class="comment-content">从姐姐那儿带过来的，不是买的哦儿带过来的，不是买的哦儿带过来的，不是买的哦儿带过来的，不是买的哦儿带过来的，不是买的哦</p>
            <div class="reply-list">
                <p class="reply-item"><span class="name">七彩儿: </span><span class="content">这么巧，我的也是哦~</span></p>
                <div class="fold" :class="childFold?'':'show'">
                    <p class="reply-item"><span class="name">七彩儿: </span><span class="content">这么巧，我的也是哦~</span></p>
                </div>
                <p class="toggle-told" v-if="childFold" @click="childFold=!childFold">共10条回复 <span class="i"></span></p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        fold: Boolean,
    // // 多种类型
    // propB: [String, Number],
    // // 必传且是字符串
    // propC: {
    //   type: String,
    //   required: true
    // },
    // // 数字，有默认值
    // propD: {
    //   type: Number,
    //   default: 100
    // },
    // // 数组/对象的默认值应当由一个工厂函数返回
    // propE: {
    //   type: Object,
    //   default: function () {
    //     return { message: 'hello' }
    //   }
    // },
    // // 自定义验证函数
    // propF: {
    //   validator: function (value) {
    //     return value > 10
    //   }
    },
    data(){
        return{
            childFold: this.fold
        }
    }
}
</script>

<style lang="scss">
.comment-item{
    width: 100%;
    padding: 20rpx 24rpx;
    background-color: #fff;
    position: relative;
    .avatar{
        flex: 0 0 70rpx;
        height: 70rpx;
        border-radius: 50%;
        overflow: hidden;
        img{
            width: 100%;
        }
    }
    .text{
        padding-left: 24rpx;
        .user-name{
            margin-bottom: 10rpx;
            padding-top: 5rpx;
            line-height: 28rpx;
            font-size: 28rpx;
            color: #1E1E1E;
            .action{
                .like{
                    display: inline-block;
                    font-size: 26rpx;
                    color: #909090;
                    padding-left: 36rpx;
                    background-image: url(./icons/discovery_like.png);
                    background-size: 28rpx auto;
                    background-repeat:  no-repeat;
                    background-position: left center;
                    &.liked{
                        background-image: url(./icons/discovery_liked.png);
                    }
                }
                .action-text{
                    font-size: 26rpx;
                    margin-left: 14rpx;
                    color: #FF5940;
                }
            }
        }
        .time{
            font-size: 24rpx;
            color: #909090;
            line-height: 24rpx;
        }
        .comment-content{
            font-size: 28rpx;
            color: #1E1E1E;
            line-height: 36rpx;
            margin-top: 15rpx;
        }
        .reply-list{
            width: 100%;
            padding: 16rpx 18rpx;
            background-color: #EEEEEE;
            .reply-item{
                font-size: 26rpx;
                line-height: 32rpx;
                margin-bottom: 10rpx;
                .name{
                    color: #1E1E1E;
                }
                .content{
                    color: #909090;
                }
            }
            .fold{
                display: none;
                &.show{
                    display: block;
                }
            }
            .toggle-told{
                font-size: 26rpx;
                color: #F76437;
                height: 30rpx;
                line-height: 30rpx;
                .i{
                    display: inline-block;
                    width: 16rpx;
                    height: 30rpx;
                    background-image: url(./icons/comment_icon_03.png);
                    background-repeat: no-repeat;
                    background-position: right center;
                    background-size: 14rpx auto;
                    vertical-align: bottom;
                    position: relative;
                    top: 3rpx;
                }
            }
        }
    }
    &:after{
        content: '';
        display: block;
        width: calc(100% - 48rpx);
        height: 1rpx;
        position: absolute;
        bottom: 1rpx;
        left: 24rpx;
        background-color: #E8E8E8;
    }
    &:last-child:after{
        content: none;
    }
}
</style>
