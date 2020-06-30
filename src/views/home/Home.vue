<template>
  <div id="home">
    <home-nav></home-nav>
    <tab-control :titles="titles" @tabClick="changeGoodsList" ref="tabControl1" v-show="isTabFixed" class="fixed"></tab-control>
    <scroll
      class="wrapper"
      :probeType="3"
      :pullUpLoad="true"
      @pullingUp="loadMore"
      ref="scroll"
      @scroll="scrollContent"
    >
      <home-swipe :banners="banner" @swipeImageLoad="swipeImageLoad" ref="homeSwiper"></home-swipe>
      <recommend-view :recommend="recommend"></recommend-view>
      <feature-view></feature-view>
      <tab-control :titles="titles" @tabClick="changeGoodsList" ref="tabControl2"></tab-control>
      <goods-list :goodsList="showGoods"></goods-list>
    </scroll>
    <back-top v-if="showBackTop" @click.native="toTop"></back-top>
  </div>
</template>

<script>
import HomeNav from "./child/HomeNav";
import HomeSwipe from "./child/HomeSwipe";
import RecommendView from "./child/RecommendView";
import FeatureView from "./child/FeatureView";
import TabControl from "content/tabcontrol/TabControl";
import GoodsList from "content/goodslist/GoodsList";
import BackTop from 'content/backtop/BackTop'

import Scroll from "common/scroll/Scroll";

import { getHomeMultiData, getHomeGoods } from "network/home";
export default {
  name: "Home",
  components: {
    HomeNav,
    HomeSwipe,
    RecommendView,
    FeatureView,
    TabControl,
    GoodsList,
    BackTop,
    Scroll
  },
  data() {
    return {
      banner: [],
      recommend: [],
      titles: ["流行", "新款", "热卖"],
      goods: {
        pop: {
          page: 0,
          list: []
        },
        new: {
          page: 0,
          list: []
        },
        sell: {
          page: 0,
          list: []
        }
      },
      currentType: "pop",
      tabOffsetTop: 0,
      isTabFixed:false,
      showBackTop:false,
      saveY:null,
    };
  },
  created() {
    this.getHomeMultiData();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
    this.$bus.$on("imgLoadItem", () => {
      this.$refs.scroll.refresh();
    });
  },
  deactivated() {
    this.$refs.homeSwiper.stopTimer();
    this.saveY=this.$refs.scroll.getScrollY();
    //console.log('deactiveted');
    
  },
  activated() {
    this.$refs.homeSwiper.startTimer();
    this.$nextTick(()=>{
      this.$refs.scroll.scrollTo(0,this.saveY,0);
    
    });
       this.$refs.scroll.refresh();

  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    }
  },
  methods: {
   changeGoodsList(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
      this.$refs.tabControl1.currentIndex=this.$refs.tabControl2.currentIndex=index
      // if(this.isTabFixed){
      //   this.$refs.scroll.scrollTo(0,-this.tabOffsetTop,0)
      // }
    },
    loadMore() {
      this.getHomeGoods(this.currentType);
      this.$refs.scroll.finishPullUp();
      this.$refs.scroll.refresh();
    },
    swipeImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    scrollContent(position) {
      this.isTabFixed=-position.y>this.tabOffsetTop;
      const scrollDistance=-1200
      this.showBackTop=position.y<scrollDistance;
    },
    toTop(){
      this.$refs.scroll.scrollTo(0,0);
      this.$refs.scroll.refresh();
    },
    /**
     * 网络请求相关方法
     */
     getHomeMultiData() {
      getHomeMultiData().then(res => {
        const result = res.data;
        this.banner = result.banner.list;
        this.recommend = result.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        //console.log(res.data.list);

        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
      });
    },
  }
};
</script>

<style scoped>
#home {
  position: relative;
  height: 100vh;
}
.wrapper {
  position: absolute;
  top: 44px;
  bottom: 49px;
  overflow: hidden;
}
.fixed{
  position: relative;
  z-index: 9;
}
</style>