<template>
    <div class="pet-status" :class="gender==0?'girl':'boy'">
        <span></span>{{isSterilization?'已绝育':'未绝育'}}
    </div>
</template>

<script>
export default {
    props:['gender', 'isSterilization']
}
</script>
 <style>
 .pet-status{
  display: inline-block;
  height: 30rpx;
  padding: 0 14rpx;
  padding-left: 32rpx;
  border-radius: 15rpx;
  color: #fff;
  font-size: 22rpx;
  position: relative;
}
.pet-status span{
  display: inline-block;
  width: 16rpx;
  height: 100%;
  background-repeat: no-repeat;
  background-position: center;
  background-size: 16rpx auto;
  position: absolute;
  left: 15rpx;
}
.pet-status.boy span{
  background-image: url(./icons/boy_03.png);
}
.pet-status.boy{
    background-color: #45B7FF;
}
.pet-status.girl{
    background-color: #FB5895;
}
.pet-status.girl span{
    background-image: url(./icons/girl.png)
}
 </style>
 