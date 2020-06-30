<template>
  <div class="goods-list-item" @click="toDetail">
    <img v-lazy="showImage" alt @load="imageLoad" />
    <div class="goods-info">
      <p class="title">{{goods.title}}</p>
      <span class="price">￥{{goods.price}}</span>
      <span class="collect">{{goods.cfav}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage() {
      return this.goods.image || this.goods.show.img || this.goods.img;
    }
  },
  methods: {
    imageLoad() {
      //console.log('imgload');
      this.$bus.$emit("imgLoadItem");
    },
    toDetail() {
      this.$router.push("/detail/" + this.goods.iid);
    }
  }
};
</script>

<style scoped>
.goods-list-item {
  padding-bottom: 40px;
  position: relative;
}
.goods-list-item img {
  width: 100%;
  border-radius: 8px;
}
.goods-info {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info .title {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-bottom: 3px;
}
.goods-info .price {
  color: var(--color-high-text);
  margin-right: 20px;
}
.goods-info .collect {
  position: relative;
}
.goods-info .collect::before {
  content: "";
  position: absolute;
  top: 0;
  left: -15px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>