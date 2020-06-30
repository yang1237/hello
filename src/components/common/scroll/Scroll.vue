<template>
  <div ref="wrapper">
      <div>
          <slot></slot>
      </div>
  </div>
</template>

<script>

import BScroll from 'better-scroll'
import {throttle} from 'utils/utils'
export default {
    name:'Scroll',
    data() {
        return {
            scroll:null
        }
    },
    props:{
        pullUpLoad:{
            type:Boolean,
            default:false
        },
        probeType:{
            type:Number,
            default:0
        }
    },
    mounted() {
       setTimeout(() => {
           this._initScroll()
       }, 20);
    },
    methods: {
        _initScroll(){
            if(!this.$refs.wrapper)return;
            this.scroll=new BScroll(this.$refs.wrapper,{
                click:true,
                probeType:this.probeType,
                pullUpLoad:this.pullUpLoad,
            })
           if(this.probeType===2||this.probeType===3){
               this.scroll.on('scroll',pos=>{
                   this.$emit('scroll',pos)
               })
             //this.scroll.on('scroll',throttle(emitScroll,500));
           }
           if(this.pullUpLoad){
               this.scroll.on('pullingUp',()=>{
                   this.$emit('pullingUp');
               })
           }
        },
        // emitScroll(pos){
        //     this.$emit('scroll',pos)
        // },
        finishPullUp(){
            this.scroll && this.scroll.finishPullUp();
        },
        refresh(){
            this.scroll && this.scroll.refresh();
        },
        getScrollY(){
           return this.scroll && this.scroll.y
        },
        scrollTo(x,y,time=300){
            this.scroll && this.scroll.scrollTo(x,y,time)
        }
        
    },
}
</script>

<style>

</style>