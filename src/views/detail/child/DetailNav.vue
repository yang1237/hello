<template>
  <nav-bar id="nav-bar">
    <template v-slot:left>
      <div class="left">
        <img src="~assets/img/common/back.svg" alt @click="back"/>
      </div>
    </template>
    <template v-slot:center>
      <div class="center">
        <div
          v-for="(item,index) in titles"
          :key="index"
          class="center-item"
          @click="titleClick(index)"
          :class="{active:currentIndex===index}"
        >{{item}}</div>
      </div>
    </template>
  </nav-bar>
</template>

<script>
import NavBar from "common/navbar/NavBar";
export default {
  name: "DetalNav",
  components: {
    NavBar
  },
  // data() {
  //   return {
  //     titles: ["商品", "详情", "评论", "推荐"],

  //     currentIndex:0
  //   };
  // },
  props:{
    titles:{
      type:Array,
      default(){
        return ["商品", "详情", "评论", "推荐"]
      }
    },
    currentIndex:{
      type:Number,
      default:0
    }
  },
  methods: {
      titleClick(index){
       this.$emit('titleClick',index)
      },
      back(){
          this.$router.back();
      }
  },
};
</script>

<style scoped>

.center {
  display: flex;
  text-align: center;
}
.left {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.center-item {
  flex: 1;
  height: 44px;
  line-height: 44px;
}
.active{
    color:var(--color-high-text)
}
</style>