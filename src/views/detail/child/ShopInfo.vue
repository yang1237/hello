<template>
  <div class="shop-info">
      <div class="shop-top">
          <img :src="shop.logo" alt="">
          <div class="title">{{shop.name}}</div>
      </div>
      <div class="shop-middle">
          <div class="shop-middle-item shop-middle-left">
              <div class="info-sells">
                  <div class="sells-count">{{shop.sells|sellsCountFilter}}</div>
                  <div class="count-text">总销量</div>
              </div>
               <div class="info-goods">
                  <div class="goods-count">{{shop.goodsCount}}</div>
                  <div class="count-text">全部宝贝</div>
              </div>
          </div>
          <div class="shop-middle-item shop-middle-right">
            <table>
                <tr v-for="(item,index) in shop.score" :key="index">
                    <td>{{item.name}}</td>
                    <td class="score" :class="{'score-better':item.isBetter}">{{item.score}}</td>
                    <td class="better" :class="{'better-more':item.isBetter}"><span>{{item.isBetter?'高':'低'}}</span></td>
                </tr>
            </table>
          </div>
      </div>
      <div class="shop-bottom">
          <div class="enter-shop">进店逛逛</div>
      </div>
  </div>
</template>

<script>
export default {
    name:'ShopInfo',
    props:{
        shop:{
            type:Object,
            default(){
                return {}
            }
        }
    },
    filters:{
        sellsCountFilter(value){
            if(value<10000)return value
            return (value/10000).toFixed(1)+'万'
        }
    }
}
</script>

<style scoped>
.shop-info{
    padding:25px 8px;
    border-bottom: 5px solid #f2f5f8;
}
.shop-top{
    display: flex;
    align-items: center;
    line-height: 45px;
}
.shop-top img{
    width:45px;
    height:45px;
    border-radius: 50%;
    border:1px solid rgba(0, 0, 0, .1)
}
.shop-top .title{
    margin-left: 10px;
    vertical-align:center;
}
.shop-middle{
    display: flex;
    margin-top:15px;
    align-items: center;
}
.shop-middle-item{
    flex:1;
}
.shop-middle-left{
    display: flex;
    justify-content: space-evenly;
    text-align:center;
    color: #333;
    border-right:1px solid rgba(0, 0, 0, .1)
}
.sells-count,.goods-count{
    font-size:18px;
}
.count-text{
    margin-top: 10px;
  font-size: 12px;
}
.shop-middle-right{
    font-size: 13px;
    color:#333;
}
.shop-middle-right table{
    margin-left:30px;
    width:120px;
}
td{
    padding:5px 0;
}
.score{
    color:#5ea732;
}
.score-better{
    color:#f13e3a;
}
.better span{
    color:#fff;
    background:#5ea732;
    text-align: center;
}
.better-more span{
    background:#f13e3a;
}
.shop-bottom{
  margin-top:10px;
  text-align: center;
}
.enter-shop{
  display: inline-block;
  width:150px;
  background:#f2f5f8;
  height:30px;
  line-height: 30px;
  font-size: 14px;
  border-radius: 10px;
}
</style>