<template>
  <div class="detail-info" v-if="Object.keys(detailInfo).length!==0">
      <div class="detail-desc clear-fix">
          <div class="start"></div>
          <div class="desc">{{detailInfo.desc}}</div>
          <div class="end"></div>
      </div>
      <div class="detail-key">{{detailInfo.detailImage[0].key}}</div>
      <div class="detail-list">
          <img v-for="(item,index) in detailInfo.detailImage[0].list" :key=index :src="item|imgFilter" alt="" @load="imageLoad">
      </div>
  </div>
</template>

<script>
export default {
    name:'DetailGoodsInfo',
    props:{
        detailInfo:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        imgFilter(value){
            return 'http:'+value
        }
    },
    methods: {
      imageLoad(){
        this.$emit('detailImageLoad')
      }
    },
}
</script>

<style scoped>
    .detail-info {
    padding: 20px 0;
    border-bottom: 5px solid #f2f5f8;
  }

  .detail-desc {
    padding: 0 15px;
  }

  .detail-desc .start, .detail-desc .end {
    width: 90px;
    height: 1px;
    background-color: #a3a3a5;
    position: relative;
  }

  .detail-desc .start {
    float: left;
  }

  .detail-desc .end {
    float: right;
  }

  .detail-desc .start::before, .detail-desc .end::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 5px;
    background-color: #333;
    bottom: 0;
  }

  .detail-desc .end::after {
    right: 0;
  }

  .detail-desc .desc {
    padding: 15px 0;
    font-size: 14px;
  }

  .detail-key {
    margin: 10px 0 10px 15px;
    color: #333;
    font-size: 15px;
  }

  .detail-list img {
    width: 100%;
  }
</style>