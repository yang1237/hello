<template>
  <div class="goods-base-info" v-if="Object.keys(goodsInfo).length">
    <div class="goods-title">{{goodsInfo.title}}</div>
    <div class="goods-price">
      <span class="new-price">{{goodsInfo.newPrice}}</span>
      <span class="old-price">{{goodsInfo.oldPrice}}</span>
      <span class="discount">{{goodsInfo.discount}}</span>
    </div>
    <div class="goods-others">
      <span>{{goodsInfo.columns[0]}}</span>
      <span>{{goodsInfo.columns[1]}}</span>
      <span>{{goodsInfo.services[goodsInfo.services.length-1].name}}</span>
    </div>
    <div class="goods-services">
      <div v-for="(item,index) in goodsInfo.services" :key="index">
        <img :src="item.icon" alt />
        <span>{{item.name}}</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsBaseInfo",
  props: {
    goodsInfo: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.goods-base-info {
  margin-top: 15px;
  padding: 0 8px;
  color: #999;
  border-bottom: 5px solid #f2f5f8;
}
.goods-title {
  margin-bottom: 8px;
  color: #222;
}
.new-price {
  color: var(--color-high-text);
  font-size: 24px;
}
.old-price {
  margin-left: 5px;
  text-decoration: line-through;
  font-size: 13px;
}
.discount {
  position: relative;
  background: var(--color-tint);
  padding: 2px 5px;
  color: #fff;
  font-size: 12px;
  border-radius: 8px;
  top: -8px;
  margin-left: 5px;
}
.goods-others {
  display: flex;
  line-height: 30px;
  font-size: 13px;
  margin-top: 15px;
  justify-content: space-between;
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.goods-services{
    display:flex;
    flex-wrap: wrap;
    justify-content: space-around;
    line-height: 60px;
}
.goods-services img{
    width:14px;
    height:14px;
    position: relative;
    top:2px;
}
.goods-services span{
    color:#333;
    font-size: 13px;
}
</style>