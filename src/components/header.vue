<template>
    <div>
        <div class="header flex flex-row">
            <img src="/static/images/headerbg_03.png"/>
            <div class="back-btn" v-if="showBack"></div>
            <div class="flex1">{{title}}</div>
        </div>
    </div>
</template>

<script>
export default {
    props:['title','showBack'],
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
    }
    .back-btn{
        width: 30px;
        height: 100%;
        background-image: url(../images/backIcon_03.png);
        background-repeat: no-repeat;
        background-size: 11px auto;
        background-position: 0px 35px;
        position: relative;
        z-index: 9;
    }
    .flex1{
        padding-right: 100px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        font-size: 18px;
        color: #fff;
        line-height: 90px;
        position: relative;
        z-index: 9;
    }
    .header img{
        width: 65px;
        position: absolute;
        bottom: 0;
        left: 12px;
        height: 45px;
    }
</style>

