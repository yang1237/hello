<template>
  <swiper v-if="topImages.length" class="detail-swiper">
      <swiper-item v-for="(item,index) in topImages" :key=index>
          <img :src="item" alt="">
      </swiper-item>
  </swiper>
</template>

<script>
import Swiper from 'common/swipe/Swiper'
import SwiperItem from 'common/swipe/SwipeItem'
export default {
    name:'DetailSwiper',
    components:{
        Swiper,
        SwiperItem
    },
    props:{
        topImages:{
            type:Array,
            default(){
                return []
            }
        }
    },
}
</script>

<style scoped>
.detail-swiper{
    width:100%;
    height:300px;
    overflow: hidden;
}

</style>