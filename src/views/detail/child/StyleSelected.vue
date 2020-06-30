<template>
  <div class="style-selected">
      <div class="btn" @click="btnClick">确定</div>
  </div>
</template>

<script>
export default {
    name:'StyleSelected',
    methods: {
      btnClick(){
        this.$emit('btnClick')
      }
    },
}
</script>

<style scoped>
.style-selected{
    position: fixed;
    right:0;
    bottom:0;
    left:0;
    text-align: center;
    z-index: 11;
    background: #fff;
    height:60px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid rgba(0, 0, 0, .1);
}
.btn{
    width:320px;
   
  line-height: 36px;
  font-size: 18px;

  background: var(--color-tint);
  color: #fff;
  
  text-align: center;
  font-weight: 900;
  border-radius: 10px;

}
</style>