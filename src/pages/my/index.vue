<template>
    <div class="user-center">
        <v-header title="我的" :showBack="false" align="center"></v-header>
        <div class="circleback"></div>
        <div class="user-card flex flex-row">
            <div class="avatar">
                <div class="border">
                    <img src="/static/images/pic_12.png" mode="widthFix" />
                </div>
            </div>
            <div class="flex1 user-text">
                <p class="user-name">
                    <span class="mame">李小七</span>
                    <span class="meal-card">×780</span>
                </p>
                <p class="user-addr">北京市东城区</p>
            </div>
            <a href="../edituserinfo/main" class="edit-btn"></a>
        </div>
        <div class="user-menu-list">
            <div class="item flex flex-row question">
                <span class="icon"></span>
                <p class="flex1">常见问题</p>
                <span class="arrow-right"></span>
            </div>
            <a href="../feedback/main" class="item flex flex-row feedback">
                <span class="icon"></span>
                <p class="flex1">意见反馈</p>
                <span class="arrow-right"></span>
            </a>
            <div class="item flex flex-row meal-card-mall">
                <span class="icon"></span>
                <p class="flex1">蹭饭卡商城 <span>即将出锅</span></p>
                <span class="arrow-right"></span>
            </div>
            <div class="item flex flex-row about">
                <span class="icon"></span>
                <p class="flex1">关于Ta宠</p>
                <span class="arrow-right"></span>
            </div>
        </div>
    </div>
</template>

<script>
import header from '../../components/header';
export default {
    data(){
        return{

        }
    },
    beforeMount: function(){

    },
    components:{
        'v-header': header
    }
}
</script>

<style lang="scss" scoped>
.user-center{
    padding-top: 160rpx;
    .circleback{
        width: calc(100% + 40px);
        height: 320rpx;
        background: linear-gradient(to right, #FF4A46 , #FF603D);
        border-radius: 100%;
        position: fixed;
        z-index: -1;
        top: -30rpx;
        left: -43rpx;
    }
    .user-card{
        width: calc(100% - 48rpx);
        background-color: #fff;
        border-radius: 10rpx;
        margin: auto;
        padding: 35rpx 0;
        padding-left: 40rpx;
        position: relative;
        margin-bottom: 20rpx;
        box-shadow:0px 0px 6px rgba(0,0,0,0.1);
        overflow: hidden;
        .avatar{
            flex: 0 0 111rpx;
            height: 111rpx;
            border-radius: 50%;
            border: 8rpx solid rgb(255,238,236);
            .border{
                width: 95rpx;
                height: 95rpx;
                border-radius: 50%;
                overflow: hidden;
                border: 4rpx solid rgb(255,223,219);
                image{
                    width: 100%;
                }
            }
        }
        .user-text{
            padding-left: 28rpx;
            .user-name{
                font-size: 32rpx;
                color: #1E1E1E;
                line-height: 68rpx;
                .mame{
                    margin-right: 17rpx;
                }
                .meal-card{
                    display: inline-block;
                    vertical-align: top;
                    padding-left: 30rpx;
                    font-size: 24rpx;
                    color: #FF4A46;
                    background-image: url(../../icons/meal_card.png);
                    background-position: left center;
                    background-size: 28rpx auto;
                    background-repeat: no-repeat;
                }
            }
            .user-addr{
                font-size: 28rpx;
                color: #909090;
                line-height: 28rpx;
            }
        }
        .edit-btn{
            display: block;
            position: absolute;
            top: 0;
            right: 0;
            width: 65rpx;
            height: 45rpx;
            border-bottom-left-radius: 110rpx;
            box-shadow:0px 0px 10px rgba(255,87,65,0.3);
            background-repeat: no-repeat;
            background-size: 26rpx auto;
            background-position: 29rpx 12rpx;
            background-image: url(../../icons/edit.png);
        }
    }
    .user-menu-list{
        width: 100%;
        padding: 0 24rpx;
        .item{
            width: 100%;
            height: 80rpx;
            background-color: #fff;
            padding: 0 20rpx;
            line-height: 80rpx;
            font-size: 28rpx;
            color: #1E1E1E;
            position: relative;
            &::after{
                content: '';
                display: block;
                width: calc(100% - 40rpx);
                height: 1rpx;
                background-color: #F2F2F2;
                position: absolute;
                left: 20rpx;
                bottom: 1rpx;
            }
            .icon{
                flex: 0 0 50rpx;
                background-repeat: no-repeat;
                background-position: left center;
            }
            &.question{
                border-radius: 10rpx 10rpx 0 0;
                .icon{
                    background-image: url(../../icons/question.png);
                    background-size: 34rpx auto;
                }
            }
            &.feedback{
                .icon{
                    background-image: url(../../icons/feedback-icon.png);
                    background-size: 32rpx auto;
                }
            }
            &.meal-card-mall{
                border-radius: 0 0 10rpx 10rpx;
                &::after{
                    content: none;
                }
                .icon{
                    background-image: url(../../icons/mall.png);
                    background-size: 31rpx auto;
                }
            }
            &.about{
                margin-top: 20rpx;
                border-radius: 10rpx;
                &::after{
                    content: none;
                }
                .icon{
                    background-image: url(../../icons/about.png);
                    background-size: 33rpx auto;
                }
            }
            .flex1{
                position: relative;
                span{
                    color: #C8C8C8;
                    position: absolute;
                    right: 0;
                }
            }
            .arrow-right{
                flex: 0 0 40rpx;
                height: 100%;
                background-repeat: no-repeat;
                background-position: 6px center;
                background-size: 16rpx auto;
                background-image: url(../../icons/arrow_right.png);
            }
        }
    }
}
</style>

