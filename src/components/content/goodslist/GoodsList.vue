<template>
  <div class="goods-list">
     <gird-view>
       <goods-list-item v-for="(item,index) in goodsList" :key="index" :goods="item"></goods-list-item>
     </gird-view>
  </div>
</template>

<script>
import GirdView from 'common/girdview/GirdView'
import GoodsListItem from './GoodsListItem'
export default {
  name:'GoodsList',
  components:{
    GirdView,
    GoodsListItem
  },
  props:{
    goodsList:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>

<style scoped>
    .goods-list{
      display: flex;
      width:100%;
    }
</style>