<template>
  <div class="goods-params" v-if="Object.keys(productParams).length!==0">
    <table v-for="(table,index) in productParams.size" :key="index">
      <tr v-for="(tr,indey) in table" :key="indey">
        <td v-for="(td,indez) in tr" :key="indez">{{td}}</td>
      </tr>
    </table>
    <table class="info-params">
      <tr v-for="(item,index) in productParams.info" :key="index">
        <td class="params-key">{{item.key}}</td>
        <td class="params-value">{{item.value}}</td>
      </tr>
    </table>
    <div v-if="productParams.image" class="info-img">
      <img :src="productParams.image" alt />
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsParams",
  props: {
    productParams: {
      type: Object,
      default() {
        return {};
      }
    }
  }
};
</script>

<style scoped>
.goods-params {
  padding: 25px 15px;
  border-bottom: 5px solid #f2f5f8;
  font-size: 14px;
}
.goods-params table {
  border-collapse: collapse;
  width: 100%;
}
.goods-params table tr {
  height: 42px;
}
.goods-params table tr td {
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
}
.goods-params .info-params {
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.goods-params .params-key {
  width: 95px;
}
.goods-params .params-value {
  color: #eb4868;
}
.info-img img {
  width: 100%;
}
</style>