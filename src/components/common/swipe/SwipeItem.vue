<template>
    <div class="slide">
        <slot></slot>
    </div>
</template>
<script>
export default {
    name:'SwipeItem',
}
</script>
<style scoped>
    .slide{
        flex-shrink: 0;
        width:100%;

    }
    .slide img{
        width:100%;
    }
</style>