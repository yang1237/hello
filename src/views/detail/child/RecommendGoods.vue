<template>
 <div class="recommend-goods">
  <div class="recommend-title">热门推荐</div>
   <goods-list :goodsList="recommendGoods"></goods-list>
 </div>
</template>

<script>

import GoodsList from 'content/goodslist/GoodsList'

export default {
    name:'RecommendGoods',
    props:{
        recommendGoods:{
            type:Array,
            default(){
                return []
            }
        }
    },
    components:{
       GoodsList,
    }
}
</script>

<style scoped>
 .recommend-goods{
     padding:5px;
 }
 .recommend-goods .recommend-title{
     line-height: 40px;
     font-size: 15px;
     color:#333;
     padding-left:8px;
 }
</style>