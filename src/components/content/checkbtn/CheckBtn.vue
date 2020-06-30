<template>
  <div>
      <div class="icon-selector" :class="{'selector-active':checked}" @click="selectItem"></div>
  </div>
</template>

<script>
export default {
    name:'CheckBtn',
    data() {
        return {
            checked:false,
        }
    },
    props:{
        isChecked:{
            type:Boolean,
            default:false
        }
    },
    methods: {
        selectItem(){
            this.checked=!this.checked;
            this.$emit('checkBtnClick',this.checked)
        }
    },
    watch:{
        isChecked(newValue){
            this.checked=newValue;
        }
    }
}
</script>

<style scoped>
    .icon-selector{
        position:relative;
        margin:0;
        width:18px;
        height:18px;
        border:1px solid black;
        border-radius:50%;
    }
    .selector-active{
        background-color:#ff8198;
        border-color: #ff8198;
    }
</style>