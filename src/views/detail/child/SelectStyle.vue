<template>
  <div class="wrapper" v-if="Object.keys(skuInfo).length!==0" @click="selectStyleClick">
    <div class="card" @click="cardClick">
      <div class="select-style">
        <div class="header">
          <div class="image">
            <img :src="image" alt />
          </div>
          <div class="tips">
            <p class="price-tips">{{priceTips}}</p>
            <p class="stock-tips">库存{{stockTips}}件</p>
            <p class="select-tips">{{selectTips}}</p>
          </div>
        </div>
        <div v-for="(o,n) in skuInfo.props" :key="n" class="style">
          <div class="style-key">{{o.label}}</div>
          <div class="style-value">
            <span
              v-for="(oItem,index) in o.list"
              :key="index"
              @click="selectStyle(oItem,n,index,$event)"
              :class="[subIndex[n]===index?'active':'']"
            >{{oItem.name}}</span>
          </div>
        </div>
      </div>
      <style-selected @btnClick="btnClick"></style-selected>
    </div>
  </div>
</template>

<script>
import StyleSelected from "./StyleSelected";
export default {
  name: "SelectStyle",
  props: {
    topImages: {
      type: Array,
      default() {
        return [];
      }
    },
    skuInfo: {
      type: Object,
      default() {
        return {};
      }
    },
    goodsInfo:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  components: {
    StyleSelected
  },
  data() {
    return {
      selectArr: ["", ""],
      subIndex: ["", ""],
      sku: null,
      image: "",
      label: [],
      bool: null
    };
  },
  created() {
    this.$nextTick(() => {
      this.image = this.topImages[0];
      for (let item of this.skuInfo.props) {
        this.label.push(item.label.replace(":", ""));
      }
    });
  },
  computed: {
    selectTips() {
      let arr = [];
      let arr1 = [];
      let arr2 = [];
      for (let i = 0; i < this.label.length; i++) {
        if (this.selectArr[i] === "") {
          arr1.push(this.label[i]);
          //this.label.splice(i,1,'')
        } else {
          arr2.push(this.selectArr[i].name);
        }
      }
      arr2.forEach(item => {
        let item1 = '"' + item + '"';
        arr.push(item1);
      });

      return this.bool ? "已选:" + arr.join(" ") : "请选择 " + arr1.toString();
    },
    stockTips() {
      return this.bool ? this.sku.stock : this.skuInfo.totalStock;
    },
    priceTips() {
      return this.bool ? '￥'+(this.sku.price/100).toFixed(2) : '￥'+this.goodsInfo.realPrice
    }
  },
  methods: {
    selectStyle(item, n, index, evnet) {
      if (this.selectArr[n] !== item) {
        //this.selectArr[n] = item;
        //this.subIndex[n] = index;
        this.selectArr.splice(n, 1, item);
        this.subIndex.splice(n, 1, index);
        //this.$set(this.subIndex, n, index);
      } else {
        //this.selectArr[n] = "";
        //this.subIndex[n] = -1;
        this.selectArr.splice(n, 1, "");
        this.subIndex.splice(n, 1, -1);
        //this.$set(this.subIndex, n, -1);
      }
      this.bool = this.selectArr.every(item => {
        return item !== "";
      });
      for (let item of this.skuInfo.skus) {
        
        if (
          item.styleId === this.selectArr[0].styleId &&
          item.sizeId === this.selectArr[1].sizeId
        ) {
          this.sku = item;
        }
      }
     
      
      let obj =
        this.skuInfo.skus.find(item => {
          return item.styleId === this.selectArr[0].styleId;
        }) || {};
      this.image = obj.img || this.topImages[0];
    },
    cardClick() {
      let event = window.event;
      event.stopPropagation();
    },
    selectStyleClick() {
      this.$emit("selectStyleClick");
    },
    btnClick() {
      const p={}
       console.log(this.sku);
      if(this.sku){
       
        
        p.sku=this.sku;
       
      }
     this.$emit('selected',p)
      
    }
  }
};
</script>

<style scoped>
.wrapper {
  position: relative;
  width: 100%;
  height: 100%;
  background: rgba(100, 100, 100, 0.2);
  z-index: 10;
}
.select-style {
  position: fixed;
  height: 500px;
  bottom: 0;
  right: 0;
  left: 0;
  background: #fff;
  /* border:1px solid rgba(100, 100, 100, 0.1); */
  /* box-shadow: 0 1px 1px rgba(100, 100, 100, 0.1); */
  padding: 20px 10px;

  border-radius: 15px 15px 0 0;
  padding-top: 10px;
}
.header {
  display: flex;
  margin: 10px;
}

.tips {
  margin: 20px;
}
.select-tips {
  font-size: 14px;
}

.style {
  line-height: 24px;
  font-size: 15px;
  margin: 10px;
}

.style span {
  display: inline-block;
  margin: 5px 9px;
  /* flex:1; */
  border-radius: 5px;
  padding: 1px 8px;
  border: 1px solid black;
  background: #fafafa;
}

.style-key {
  font-weight: 800;
}
span.active {
  background: #ffe4c4;
  border: 1px solid #ff1493;
  color: var(--color-high-text);
}

img {
  width: 90px;
  height: 120px;
  border-radius: 6px;
}
</style>