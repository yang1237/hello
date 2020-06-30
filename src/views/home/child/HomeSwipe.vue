<template>

    <swipe v-if="banners.length>1" ref="swipe">
      <swipe-item v-for="(item,index) in banners" :key="index">
        <a :href="item.link">
          <img :src="item.image" alt @load="imgLoad" />
        </a>
      </swipe-item>
    </swipe>
  
</template>
<script>
import Swipe from "../../../components/common/swipe/Swiper";
import SwipeItem from "../../../components/common/swipe/SwipeItem";
export default {
  name: "HomwSwipe",
  components: {
    Swipe,
    SwipeItem
  },
  props: {
    banners: {
      type: Array,
      dafault() {
        return [];
      }
    }
  },
  data() {
    return {
      isLoad: false
    };
  },
  methods: {
    imgLoad() {
      if (!this.isLoad) {
        this.$emit("swipeImageLoad");
        this.isLoad = true;
      }
    },
    startTimer(){
      if(this.$refs.swipe){
        this.$refs.swipe.startTimer();
      }
    },
    stopTimer(){
      this.$refs.swipe.stopTimer();
    }
  }
};
</script>
<style scoped>
  
</style>