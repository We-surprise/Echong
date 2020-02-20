<template lang="html">
    <div class="swiper">
      <mt-swipe :auto="4000">
        <!-- <mt-swipe-item v-for="i in swiper" :key="i.id">
           <img :src="i.imgSrc">
        </mt-swipe-item> -->
         <mt-swipe-item v-for="item in data.piclist" :key="item.id">
           <img :src="item.images">
        </mt-swipe-item>
      </mt-swipe>
      <div class="back" @click="$router.go(-1)">
        <span class="icon-go"></span>
      </div>
    </div>

</template>

<script>
export default {
  data(){
    return {
      data:{
        piclist:[
          {
            id:1,
            images:require('../../assets/swpier/01.jpg')
          },
           {
            id:2,
            images:require('../../assets/swpier/02.jpg')
          },
           {
            id:3,
            images:require('../../assets/swpier/03.jpg')
          },
           {
            id:4,
            images:require('../../assets/swpier/04.jpg')
          },
           {
            id:5,
            images:require('../../assets/swpier/05.jpg')
          }
        ]
      }
    }
  },
  computed:{
    swiper(){
        return this.$store.state.detail.productDatas.swiper
    }
  }
}
</script>

<style lang="less" scoped>
@import '../../assets/fz.less';
@import '../../assets/index/style.css';

.swiper {
  width: 100%;
  position: relative;

  .mint-swipe {
    width: 100%;
    height:100vw;
    img {
      display: block;
      width: 100%;
      height:100%;
    }
  }

  .back {
    width: 7vw;
    height: 7vw;
    position: absolute;
    left: 4vw;
    top: 2vw;
    background-color: rgba(0,0,0,.4);
    border-radius: 50%;
    text-align: center;
      span {
        display: inline-block;
        line-height: 7vw;
        .fz(font-size,40);
        transform: rotate(-180deg);
        &::before {
          color:#fff;
        }
      }

      &:active {
        transform: scale(1.3);
      }
  }

}
</style>
