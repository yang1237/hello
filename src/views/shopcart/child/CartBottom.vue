<template>
  <div class="bottom-menu">
    <div class="select-all">
      <check-btn :isChecked="selectedAll" @checkBtnClick="checkBtnClick"></check-btn>
    </div>
    <div>
      <span>全选</span>
      <span class="total-price">合计:{{totalPrice}}</span>
      <span class="buy-product" @click="calcClick">去付款( {{checkLength}} )</span>
    </div>
  </div>
</template>

<script>
import CheckBtn from "content/checkbtn/CheckBtn";
import { mapGetters } from "vuex";
export default {
  name: "CartBottom",
  components: {
    CheckBtn
  },
  computed: {
    ...mapGetters(["cartList"]),

    selectedAll() {
      return this.cartList.find(item => item.checked === false) === undefined;
    },
    totalPrice() {
      return (
        "￥" +
        this.cartList
          .filter(item => item.checked)
          .reduce((preValue, item) => {
            return preValue + (item.sku.price / 100).toFixed(2) * item.count;
          }, 0)
      );
    },
    checkLength() {
      return this.cartList.filter(item => item.checked).length;
    }
  },
  methods: {
    calcClick() {},
    checkBtnClick(checked) {
      let flag = this.cartList.find(item => !item.checked);
      //console.log(isSelectedAll);

      if (flag) {
        this.$store.state.cartList.forEach(item => (item.checked = true));
      } else {
        this.$store.state.cartList.forEach(item => (item.checked = false));
      }
    }
  }
};
</script>

<style scoped>
.bottom-menu {
  width: 100%;
  height: 44px;
  background-color: #eee;
  position: fixed;
  bottom: 49px;
  left: 0;
  box-shadow: 0 -2px 3px rgba(0, 0, 0, 0.2);
  font-size: 14px;
  color: #888;
  line-height: 44px;
  padding-left: 35px;
  box-sizing: border-box;
}
.bottom-menu .select-all {
  position: absolute;
  line-height: 0;
  left: 12px;
  top: 13px;
}
.bottom-menu .total-price {
  margin-left: 15px;
  font-size: 16px;
  color: #666;
}
.bottom-menu .buy-product {
  background-color: coral;
  color: #fff;
  width: 100px;
  height: 44px;
  text-align: center;
  line-height: 44px;
  float: right;
}
</style>
