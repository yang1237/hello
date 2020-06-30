<template>
  <div class="shop-item">
    <div class="item-check">
      <check-btn @checkBtnClick="checkedChange" :isChecked="product.checked"></check-btn>
    </div>
    <div class="item-img">
      <img :src="product.sku.img" alt="商品图片" />
    </div>
    <div class="item-info">
      <p class="title">{{product.title}}</p>
      <div class="sku-info">{{product.sku.style}},{{product.sku.size}}</div>
      <div class="bottom">
        <div class="item-price left">￥{{(product.sku.price/100).toFixed(2)}}</div>
        <div class="item-count right">
          <button @click="add2Count">+</button>
          <span>{{product.count}}</span>
          <button @click="subCount" :disabled="product.count<2">-</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import CheckBtn from "content/checkbtn/CheckBtn";

export default {
  name: "CartListItem",
  components: {
    CheckBtn
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    checkedChange(checked) {
      this.product.checked=checked;
      this.$store.commit('checkedChange',this.product)
    },
    add2Count() {
      this.$store.commit("add2Count", this.product);
    },
    subCount() {
      this.$store.commit("subCount", this.product);
    }
  }
};
</script>

<style scoped>
.shop-item {
  display: flex;
  width: 100%;
  border-bottom: 1px solid #eeeddd;
}
.item-check {
  width: 14%;
  display: flex;
  align-items: center;
  justify-content: center;
}
.item-img {
  padding: 5px;
}
.item-info {
  padding: 5px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
}
.sku-info {
  color: #555;
}
img {
  width: 80px;
  height: 100px;
  border-radius: 8px;
}
.title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  font-size: 12px/15px;
}
.bottom {
  left: 10px;
  right: 10px;
}
.item-count button {
  width: 16px;
  height: 16px;

  line-height: 5px;
  text-align: center;
  vertical-align: middle;
}
.item-count span {
  padding: 3px;
}
</style>