<template>
  <div class="tab-bar-item" @click="itemClick">
   <div class="item-icon" v-if="!isActive"><slot name="icon"></slot></div>
   <div class="item-active-icon" v-else><slot name="active-icon"></slot></div>
   <div class="item-text" :style="activeStyle"><slot name="text"></slot></div>
  </div>
</template>

<script>
export default {
  name:'TabBarItem',
  data() {
    return {
      
    }
  },
  props:{
    path:{
      type:String,
      default:''
    }
  },
  computed: {
    isActive(){
      return this.path===this.$route.path
    },
    activeStyle(){
      return this.isActive?{color:'var(--color-tint)'}:{};
    }
  },
  methods: {
    itemClick(){
     if(this.path!==this.$route.path){
       this.$router.push(this.path)
     }
    }
  },
}
</script>

<style scoped>
  .tab-bar-item{
    flex:1;
    height:49px;
    text-align: center;
  }
  .tab-bar-item img{
    width:24px;
    height:24px;
    vertical-align: middle;
    margin-top:5px;

  }
  .tab-bar-item .item-text{
    font-size: 12px;
    margin-top:3px;
    color:#333;
  }
  
</style>