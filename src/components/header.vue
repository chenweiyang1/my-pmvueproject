<template>
    <div>
        <div class="header flex flex-row" :class="vClass">
            <div class="headerbgbox"></div>
            <div class="back-btn" v-if="showBack" @click="wxBack"></div>
            <div class="flex1" :style="'text-align: '+align">{{title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['title','showBack','align','vClass'],
    methods:{
        wxBack(){
            wx.navigateBack();
        }
    }
}
</script>

<style>
    .header{
        width: 100%;
        padding: 0 12px;
        height: 75px;
        position: fixed;
        top: 0;
        left: 0;
        background: -webkit-linear-gradient(left, #FF4A46 , #FF603D); /* Safari 5.1 - 6.0 */
        background: -o-linear-gradient(right, #FF4A46, #FF603D); /* Opera 11.1 - 12.0 */
        background: -moz-linear-gradient(right, #FF4A46, #FF603D); /* Firefox 3.6 - 15 */
        background: linear-gradient(to right, #FF4A46 , #FF603D); /* 标准的语法 */
        z-index: 9999;
    }
    .header .back-btn{
        width: 30px;
        height: 100%;
        background-image: url(./icons/backIcon_03.png);
        background-repeat: no-repeat;
        background-size: 11px auto;
        background-position: 0px 35px;
        position: relative;
        z-index: 9;
    }
    .header .flex1{
        padding-right: 30px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 18px;
        color: #fff;
        line-height: 90px;
        position: relative;
        z-index: 9;
    }
    .header .header img{
        width: 65px;
        position: absolute;
        bottom: 0;
        left: 12px;
        height: 45px;
    }
    .header .headerbgbox{
        background-image: url(./icons/headerbg_03.png);
        background-repeat: no-repeat;
        background-size: 65px 45px;
        width: 65px;
        position: absolute;
        bottom: 0;
        left: 12px;
        height: 45px;
    }
</style>

