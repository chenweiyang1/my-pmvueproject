<template>
    <div class="container add-my-pet">
        <v-header title="添加宠物" align="center" :showBack="true"></v-header>

        <div class="add-card">
            <div @click="chooseImg(1)" class="big-img" :class="pic1==''?'':'has-img'">
                <image mode="widthFix" v-if="pic1!=''" :src="pic1"></image>
            </div>
            <div class="flex flex-row">
                <div class="flex1">
                    <div @click="chooseImg(2)" class="small-img" :class="pic2==''?'':'has-img'">
                        <image mode="widthFix" v-if="pic2!=''" :src="pic2"></image>
                    </div>
                </div>
                <div class="flex1">
                    <div @click="chooseImg(3)" class="small-img" :class="pic3==''?'':'has-img'">
                        <image mode="widthFix" v-if="pic3!=''" :src="pic3"></image>
                    </div>
                </div>
            </div>
            <div class="inpunt-line">
                <input type="text" v-model="petName" placeholder="请输入宠物姓名" />
            </div>
            <div class="gender-line">
                <div class="chek-option boy" @click="chooseGender(1)" :class="gender==1?'active':''">
                    <span class="text">男</span>
                    <span class="icon"></span>
                </div>
                <div class="chek-option girl" @click="chooseGender(2)" :class="gender==2?'active':''">
                    <span class="text">女</span>
                    <span class="icon"></span>
                </div>
            </div>
            <div class="chose-birthday inpunt-line">
                <picker mode="date" v-model="birthDate" @change="changeDate">
                    <view class="picker-handle">
                        <span class="placeholder" v-if="birthDate==''">请选择Ta的生日</span>
                        <span v-else>{{birthDate}}</span>
                    </view>
                </picker>
            </div>
            <div class="pet-is-sterilization">
                <span class="is-sterilization-option" :class="isSterilization?'':'active'" @click="isSterilization=false">未绝育</span>
                <span class="is-sterilization-option" :class="isSterilization?'active':''" @click="isSterilization=true">已绝育</span>
            </div>
            <div class="inpunt-line">
                <input type="text" v-model="petDesc" placeholder="输入Ta最可爱的一面" />
            </div>
        </div>
        <button plain class="confirm-add-pet" @click="confirmAdd">确认添加</button>
    </div>
</template>

<script>
import header from '../../components/header';
import dateFormat from '../../utils/index';
import { host_dev } from '../../utils/base';
export default {
    data(){
        return{
            petName: '',
            gender: 1,
            birthDate: '',
            isSterilization: false,
            petDesc: '',
            pic1: '',
            pic2: '',
            pic3: '',
        }
    },
    components:{
        'vHeader': header
    },
    beforeMount: function(){
        wx.request({
            url:`${host_dev}/wx/user/`,
            method: 'GET',
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
    },
    methods:{
        chooseGender(g){
            this.gender = g;
        },
        changeDate(e){
            this.birthDate = e.mp.detail.value;
        },
        confirmAdd(){
            
        },
        chooseImg(i){
            wx.chooseImage({
                count: 3, // 默认9
                sizeType: ['original', 'compressed'], // 可以指定是原图还是压缩图，默认二者都有
                sourceType: ['album', 'camera'], // 可以指定来源是相册还是相机，默认二者都有
                success: (res) => {
                    // 返回选定照片的本地文件路径列表，tempFilePath可以作为img标签的src属性显示图片
                    var tempFilePaths = res.tempFilePaths;
                    switch (i) {
                        case 1:
                            this.pic1 = tempFilePaths[0];
                            break;
                        case 2:
                            this.pic2 = tempFilePaths[0];
                            break;
                        case 3:
                            this.pic3 = tempFilePaths[0];
                            break;
                    
                        default:
                            break;
                    }
                    wx.uploadFile({
                        url: `${host_dev}/wx/petinfo/uploadimg`,
                        filePath: tempFilePaths[0],
                        name: 'file',
                        success: (res) => {
                            console.log(JSON.parse(res.data))
                        }
                    })
                }
            })
        }
    }
}
</script>

<style scoped lang=scss>
.add-my-pet{
    .add-card{
        width: calc(100% - 65px);
        background-color: #fff;
        margin: 15px auto 0;
        border-radius: 5px;
        padding: 40rpx;
        .big-img{
            width: 100%;
            height: 130px;
            overflow: hidden;
            background-color: #F1F1F1;
            margin-bottom: 13rpx;
            background-repeat: no-repeat;
            background-size: 36rpx auto;
            background-position: center;
            background-image: url(../../icons/jia.png);
            image{
                width: 100%;
            }
        }
        .flex.flex-row{
            .flex1{
                padding-right: 9rpx;
                &:last-child{
                    padding-right: 0;
                    padding-left: 9rpx;
                }
                .small-img{
                    width: 100%;
                    height: 90px;
                    background-color: #F1F1F1;
                    overflow: hidden;
                    background-repeat: no-repeat;
                    background-size: 25rpx auto;
                    background-position: center;
                    background-image: url(../../icons/jia.png);
                    image{
                        width: 100%;
                    }
                }
            }
        }
        .inpunt-line{
            width: 347rpx;
            margin: auto;
            margin-top: 26rpx;
            line-height: 65rpx;
            border-bottom: 1rpx solid #F1F1F1;
            font-size: 14px;
            text-align: center;
            &.chose-birthday{
                .placeholder{
                    color: #808080;
                }
            }
        }
        .gender-line{
            margin-top: 30rpx;
            text-align: center;
            .chek-option{
                display: inline-block;
                width: 122rpx;
                height: 46rpx;
                border-radius: 61rpx;
                color: #909090;
                text-align: center;
                line-height: 46rpx;
                font-size: 28rpx;
                background-color: #EEEEEE;
                .icon{
                    display: inline-block;
                    width: 16rpx;
                    height: 46rpx;
                    margin-left: 9rpx;
                    background-repeat: no-repeat;
                    background-size: 19rpx auto;
                    background-position: center;
                    line-height: 46rpx;
                }
                .text{
                    display: inline-block;
                    vertical-align: top;
                }
                &.boy{
                    margin-right: 20rpx;
                    transition: all 0.3s;
                    .icon{
                        transition: all 0.3s;
                        background-image: url(../../icons/boy_gray_03.png);
                    }
                    &.active{
                        background-color: #45B7FF;
                        color: #fff;
                        .icon{
                            background-image: url(../../icons/boy_03.png);
                        }
                    }
                }
                &.girl{
                    margin-left: 20rpx;
                    transition: all 0.3s;
                    .icon{
                        transition: all 0.3s;
                        background-image: url(../../icons/girl_gray_03.png);
                    }
                    &.active{
                        background-color: #FB5895;
                        color: #fff;
                        .icon{
                            background-image: url(../../icons/girl.png);
                        }
                    }
                }
            }
        }
        .pet-is-sterilization{
            margin-top: 30rpx;
            text-align: center;
            .is-sterilization-option{
                display: inline-block;
                width: 122rpx;
                height: 46rpx;
                border-radius: 61rpx;
                color: #909090;
                text-align: center;
                line-height: 46rpx;
                font-size: 28rpx;
                background-color: #EEEEEE;
                margin-right: 20rpx;
                transition: all 0.3s;
                &:last-child{
                    margin-right: 0;
                    margin-left: 20rpx;
                }
                &.active{
                    color: #fff;
                    background: linear-gradient(to right, #FF4A46 , #FF603D); /* 标准的语法 */
                }
            }
        }
    }
    .confirm-add-pet{
        margin-top: 63rpx;
        width: 562rpx;
        height: 86rpx;
        border-radius: 86rpx;
        border: none;
        line-height: 84rpx;
        text-align: center;
        color: #fff;
        font-size: 36rpx;
        background: linear-gradient(to right, #FF4A46 , #FF603D); /* 标准的语法 */
        transition: all 0.15s;
        &.button-hover{
            box-shadow:0px 0px 18px rgba(255,75,70,0.3);
            opacity: 0.9;
        }
    }
}
</style>

