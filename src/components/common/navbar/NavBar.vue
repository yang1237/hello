<template>
  <div class="nav-bar">
    <div class="left-bar">
      <slot name="left"></slot>
    </div>
    <div class="center-bar">
      <slot name="center"></slot>
    </div>
    <div class="right-bar">
      <slot name="right"></slot>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav-bar {
  height: 44px;
  line-height: 44px;
  text-align: center;
  display: flex;
  box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1);
}
.left-bar,
.right-bar {
  width: 60px;
}
.center-bar {
  flex: 1;
}
</style>