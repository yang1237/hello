<template>
  <div class="tab-control">
    <div
      v-for="(item,index) in titles"
      :key="index"
      class="tab-item"
      :class="{active:index===currentIndex}"
      @click="itemClick(index)"
    >
      <span>{{item}}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      currentIndex: 0
    };
  },
  methods: {
    itemClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>

<style scoped>
.tab-control {
  display: flex;
  line-height: 40px;
  font-size: 15px;

  text-align: center;
  background: #fff;
}
.tab-item {
  flex: 1;
}
.active {
  color: var(--color-high-text);
}

span {
  padding: 5px;
}
.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>