<template>
    <div class="container edit-user-info">
        <v-header title="个人信息编辑" :showBack="true" align="center"></v-header>
        <div class="user-avatar flex flex-row">
            <label>头像</label>
            <div class="flex1">
                <div class="avatar-wrap">
                    <img src="/static/images/pic_12.png" mode="widthFix" />
                </div>
            </div>
        </div>
        <div class="user-info-list">
            <div class="item flex flex-row">
                <label>昵称</label>
                <div class="flex1">
                    <input type="text" placeholder="请输入昵称" />
                </div>
            </div>
            <div class="item flex flex-row">
                <label>生日</label>
                <div class="flex1">
                    <picker mode="date" v-model="birthDay" @change="changeDate">
                        <view class="picker-handle">
                            <span class="placeholder" v-if="birthDay==''">请选择生日</span>
                            <span v-else>{{birthDay}}</span>
                        </view>
                    </picker>
                </div>
            </div>
            <div class="item flex flex-row">
                <label>性别</label>
                <div class="flex1">
                    <picker :range="array" v-model="gender" @change="genderChange">
                        <view class="picker-handle">
                            <span>{{array[gender]}}</span>
                        </view>
                    </picker>
                </div>
            </div>
            <div class="item flex flex-row">
                <label>常出没地</label>
                <div class="flex1">
                    <picker mode="region" @change="cityChange">
                        <view class="picker-handle">
                            {{city}}
                        </view>
                    </picker>
                </div>
            </div>
        </div>
        <div class="save-btn">保存</div>
    </div>
</template>

<script>
import header from '../../components/header';
export default {
    data(){
        return{
            birthDay: '',
            array: ['请选择性别','男', '女'],
            gender: 0,
            city: '请选择地区'
        }
    },
    beforeMount: function(){

    },
    methods:{
        changeDate(e){
            this.birthDay = e.mp.detail.value;
        },
        genderChange(e){
            this.gender = e.mp.detail.value;
        },
        cityChange(e){
            let v = e.mp.detail.value;
            if(v[0]=='北京市'||v[0]=='上海市'||v[0]=='天津市'||v[0]=='重庆市'){
                this.city = `${v[0]} ${v[2]}`;
            } else {
                this.city = `${v[0]} ${v[1]} ${v[2]}`;
            }
        }
    },
    components:{
        'v-header': header
    }
}
</script>
<style lang="scss" scoped>
.edit-user-info{
    .user-avatar{
        width: 100%;
        height: 198rpx;
        background-color: #fff;
        padding: 45rpx 24rpx;
        label{
            flex: 0 0 140rpx;
            font-size: 30rpx;
            color: #646464;
            line-height: 108rpx;
        }
        .flex1{
            text-align: right;
        }
        .avatar-wrap{
            display: inline-block;
            width: 108rpx;
            margin-right: 10rpx;
            height: 108rpx;
            overflow: hidden;
            border-radius: 50%;
            img{
                width: 100%;
            }
        }
    }
    .user-info-list{
        margin-top: 24rpx;
        padding: 0 24rpx;
        background-color: #fff;
        width: 100%;
        .item{
            height: 100rpx;
            border-bottom: 1rpx solid #F6F5F5;
            line-height: 99rpx;
            position: relative;
            label{
                flex: 0 0 140rpx;
                font-size: 30rpx;
                color: #646464;
            }
            .flex1{
                padding-right: 40rpx;
                text-align: right;
                font-size: 30rpx;
                color: #909090;
                input{
                    width: 100%;
                    height: 100%;
                    border: none;
                    background: inherit;
                }
                .picker-handle{
                    overflow: hidden;
                    white-space: nowrap;
                    text-overflow: ellipsis;
                }
            }
            &:last-child{
                border-bottom: none;
            }
            &:after{
                content: '';
                display: block;
                width: 40rpx;
                height: 100%;
                position: absolute;
                right: 0;
                top: 0;
                background-image: url(../../icons/arrow_right.png);
                background-repeat: no-repeat;
                background-size: 16rpx auto;
                background-position:12rpx center;
            }
            &:first-child{
                &::after{
                    content: none;
                }
            }
        }
    }
    .save-btn{
        width: calc(100% - 48rpx);
        height: 80rpx;
        line-height: 80rpx;
        color: #fff;
        text-align: center;
        background: linear-gradient(to right, #FF4A46 , #FF603D);
        font-size: 36rpx;
        border-radius: 10rpx;
        position: absolute;
        bottom: 47rpx;
        left: 24rpx;
    }
}
</style>
 