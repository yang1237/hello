<template>
  <div class="recommend-view">
    <div v-for="(item,index) in recommend" :key="index" class="recommend-item">
      <a :href="item.link">
        <img :src="item.image" alt />
        <div>{{item.title}}</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "RecommendView",
  props: {
    recommend: {
      type: Array,
      default() {
        return [];
      }
    }
  }
};
</script>

<style scoped>
.recommend-view {
  display: flex;
  text-align: center;
  margin-top: 10px;
  padding-bottom:30px;
  border-bottom: 10px solid #eee;
  font-size: 14px;
}
.recommend-item {
  flex: 1;
}
.recommend-item img {
  width: 80px;
  height: 80px;
  margin-bottom:10px;
}
</style>