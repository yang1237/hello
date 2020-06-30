<template>
  <div id="detail">
    <detail-nav :currentIndex="currentIndex" @titleClick="titleClick" class="detail-nav"></detail-nav>
    <scroll class="scroll" @scroll="contentScroll" ref="detailScroll" :probeType="3">
      <detail-swiper :topImages="topImages"></detail-swiper>
      <goods-base-info :goodsInfo="goodsInfo"></goods-base-info>
      <shop-info :shop="shopInfo"></shop-info>
      <detail-goods-info :detailInfo="detailInfo" @detailImageLoad="detailImageLoad"></detail-goods-info>
      <goods-params :productParams="goodsParams" ref="params"></goods-params>
      <comment-info :commentInfo="commentInfo" ref="comment"></comment-info>
      <recommend-goods :recommendGoods="recommendGoods" ref="recommend"></recommend-goods>
    </scroll>
    <bottom-bar @addToCart="cartClick"></bottom-bar>
    <back-top @click.native="toTop" v-if="showBackTop"></back-top>
    <select-style
      v-if="selectStyle"
      :skuInfo="skuInfo"
      @selectStyleClick="selectStyleClick"
      @selected="selected"
      :topImages="topImages"
      :goodsInfo="goodsInfo"
    ></select-style>
  </div>
</template>

<script>
import DetailNav from "./child/DetailNav";
import DetailSwiper from "./child/DetailSwiper";
import GoodsBaseInfo from "./child/GoodsBaseInfo";
import ShopInfo from "./child/ShopInfo";
import DetailGoodsInfo from "./child/DetailGoodsInfo";
import GoodsParams from "./child/GoodsParams";
import CommentInfo from "./child/CommentInfo";
import RecommendGoods from "./child/RecommendGoods";
import BottomBar from "./child/BottomBar";
import SelectStyle from "./child/SelectStyle";

import BackTop from "content/backtop/BackTop";
import Scroll from "common/scroll/Scroll";

import {
  getDetail,
  getRecommend,
  GoodsInfo,
  ShopInfos,
  ProductParams,
  SkuInfo
} from "network/detail";
export default {
  name: "Detail",
  data() {
    return {
      id: null,
      topImages: [],
      goodsInfo: {},
      shopInfo: {},
      detailInfo: {},
      goodsParams: {},
      commentInfo: {},
      recommendGoods: [],
      currentIndex: 0,
      themeTops: [],
      showBackTop: false,
      selectStyle: false,
      styleProps: [],
      skuInfo:{},
    };
  },
  components: {
    DetailNav,
    DetailSwiper,
    GoodsBaseInfo,
    ShopInfo,
    Scroll,
    DetailGoodsInfo,
    GoodsParams,
    CommentInfo,
    RecommendGoods,
    BackTop,
    BottomBar,
    SelectStyle
  },
  created() {
    this.getDetail();
    
    
    this.getRecommend();
  },

  methods: {
    /**
     * 网络请求相关方法
     */
    getDetail() {
      this.id = this.$route.params.id;
      getDetail(this.id).then(res => {
        
        const data = res.result;
        this.topImages = data.itemInfo.topImages;
        
        //获取GoodsInfo组件需要的数据
        this.goodsInfo = new GoodsInfo(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        this.shopInfo = new ShopInfos(data.shopInfo);
       
        this.detailInfo = data.detailInfo;
        this.goodsParams = new ProductParams(
          data.itemParams.info,
          data.itemParams.rule
        );

        //获取评论数据
        if (data.rate.list) {
          this.commentInfo = data.rate.list[0];
        }
        //获取style数据
        //this.styleProps = data.skuInfo.props;
        console.log(data.skuInfo);
        //获取sku属性
        const sku = data.skuInfo;
        this.skuInfo = new SkuInfo(
          sku.props,
          sku.totalStock,
          sku.title,
          sku.skus,
          sku.priceRange
        );
      });
    },
    getRecommend() {
      getRecommend().then(res => {
        this.recommendGoods = res.data.list;
      });
    },

    detailImageLoad() {
      this.$refs.detailScroll.refresh();
      this.themeTops = [];
      this.themeTops.push(0);
      this.themeTops.push(this.$refs.params.$el.offsetTop);
      this.themeTops.push(this.$refs.comment.$el.offsetTop);
      this.themeTops.push(this.$refs.recommend.$el.offsetTop);
      this.themeTops.push(Number.MAX_VALUE);
    },
    contentScroll(position) {
      // console.log(position.y);
      this.showBackTop = -position.y > 1200;
      this._listenScrollTheme(-position.y);
    },
    _listenScrollTheme(position) {
      const len = this.themeTops.length;
      for (let i = 0; i < len; i++) {
        if (this.themeTops[i] <= position && position < this.themeTops[i + 1]) {
          if (this.currentIndex !== i) {
            this.currentIndex = i;
          }
          break;
        }
      }
    },
    titleClick(index) {
      this.$refs.detailScroll.scrollTo(0, -this.themeTops[index], 0);
    },
    toTop() {
      this.$refs.detailScroll.scrollTo(0, 0);
    },
    cartClick() {
      this.selectStyle = true;
    },
    selectStyleClick() {
      this.selectStyle = false;
    },
    selected(p) {
      this.selectStyle = false;
      p.id=this.id;
      p.title=this.skuInfo.title
      p.count=1;
      p.checked=false;
     if(p.sku){
        this.$store.dispatch('addCart',p)
     }
      
    }
  }
};
</script>

<style scoped>
#detail {
  position: relative;
  z-index: 8;
  background: #fff;
  height: 100vh;
}
.detail-nav {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
.scroll {
  position: absolute;
  top: 44px;
  left: 0;
  right: 0;
  overflow: hidden;
  bottom: 49px;
}
</style>