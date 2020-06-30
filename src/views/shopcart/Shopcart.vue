<template>
  <div class="shop-cart">
      <shop-nav></shop-nav>
      <cart-list></cart-list>
      <cart-bottom></cart-bottom>
  </div>
</template>

<script>
import ShopNav from './child/ShopNav'
import CartList from './child/CartList'
import CartBottom from './child/CartBottom'


export default {
    name:'Shopcart',
    components:{
        ShopNav,
        CartList,
        CartBottom,
    },
    
}
</script>

<style scoped>
.shop-cart{
    width:100%;
    position: relative;
}
</style>