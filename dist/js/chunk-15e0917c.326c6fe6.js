(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-15e0917c"],{"0b28":function(e,t,n){"use strict";var r=n("9874"),s=n.n(r);s.a},2454:function(e,t,n){},"385e":function(e,t,n){},"3cbf":function(e,t,n){"use strict";var r=n("b2ee"),s=n.n(r);s.a},"5cbe":function(e,t,n){e.exports=n.p+"img/recommend_bg.794b6628.jpg"},9874:function(e,t,n){},a409:function(e,t,n){"use strict";var r=n("2454"),s=n.n(r);s.a},b2ee:function(e,t,n){},b3d7:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"home"}},[n("home-nav"),n("tab-control",{directives:[{name:"show",rawName:"v-show",value:e.isTabFixed,expression:"isTabFixed"}],ref:"tabControl1",staticClass:"fixed",attrs:{titles:e.titles},on:{tabClick:e.changeGoodsList}}),n("scroll",{ref:"scroll",staticClass:"wrapper",attrs:{probeType:3,pullUpLoad:!0},on:{pullingUp:e.loadMore,scroll:e.scrollContent}},[n("home-swipe",{ref:"homeSwiper",attrs:{banners:e.banner},on:{swipeImageLoad:e.swipeImageLoad}}),n("recommend-view",{attrs:{recommend:e.recommend}}),n("feature-view"),n("tab-control",{ref:"tabControl2",attrs:{titles:e.titles},on:{tabClick:e.changeGoodsList}}),n("goods-list",{attrs:{goodsList:e.showGoods}})],1),e.showBackTop?n("back-top",{nativeOn:{click:function(t){return e.toTop(t)}}}):e._e()],1)},s=[],o=(n("f657"),n("8007"));function a(e){if(Array.isArray(e))return Object(o["a"])(e)}n("f3dd"),n("0a51"),n("9b11"),n("98e0"),n("a133"),n("e18c"),n("96db"),n("af86");function i(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}var c=n("1fef");function l(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function u(e){return a(e)||i(e)||Object(c["a"])(e)||l()}var f=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav-bar",{staticClass:"nav-bar",scopedSlots:e._u([{key:"center",fn:function(){return[n("div",[e._v(" 购物街 ")])]},proxy:!0}])})},m=[],d=n("a7ac"),p={name:"HomeNav",components:{NavBar:d["a"]}},h=p,b=(n("b8a6"),n("e90a")),v=Object(b["a"])(h,f,m,!1,null,"67fb89a4",null),w=v.exports,g=function(){var e=this,t=e.$createElement,n=e._self._c||t;return e.banners.length>1?n("swipe",{ref:"swipe"},e._l(e.banners,(function(t,r){return n("swipe-item",{key:r},[n("a",{attrs:{href:t.link}},[n("img",{attrs:{src:t.image,alt:""},on:{load:e.imgLoad}})])])})),1):e._e()},T=[],y=n("8dfb"),$=n("43d9"),_={name:"HomwSwipe",components:{Swipe:y["a"],SwipeItem:$["a"]},props:{banners:{type:Array,dafault:function(){return[]}}},data:function(){return{isLoad:!1}},methods:{imgLoad:function(){this.isLoad||(this.$emit("swipeImageLoad"),this.isLoad=!0)},startTimer:function(){this.$refs.swipe&&this.$refs.swipe.startTimer()},stopTimer:function(){this.$refs.swipe.stopTimer()}}},k=_,C=Object(b["a"])(k,g,T,!1,null,"52d5975f",null),x=C.exports,L=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"recommend-view"},e._l(e.recommend,(function(t,r){return n("div",{key:r,staticClass:"recommend-item"},[n("a",{attrs:{href:t.link}},[n("img",{attrs:{src:t.image,alt:""}}),n("div",[e._v(e._s(t.title))])])])})),0)},O=[],j={name:"RecommendView",props:{recommend:{type:Array,default:function(){return[]}}}},I=j,S=(n("3cbf"),Object(b["a"])(I,L,O,!1,null,"c0c6a578",null)),H=S.exports,G=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},E=[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"feature-view"},[r("a",{attrs:{href:"https://act.mogujie.com/zzlx67"}},[r("img",{attrs:{src:n("5cbe"),alt:""}})])])}],A={name:"FeatureView"},F=A,B=(n("a409"),Object(b["a"])(F,G,E,!1,null,"31918fbe",null)),M=B.exports,N=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"tab-control"},e._l(e.titles,(function(t,r){return n("div",{key:r,staticClass:"tab-item",class:{active:r===e.currentIndex},on:{click:function(t){return e.itemClick(r)}}},[n("span",[e._v(e._s(t))])])})),0)},V=[],Y={name:"TabControl",props:{titles:{type:Array,default:function(){return[]}}},data:function(){return{currentIndex:0}},methods:{itemClick:function(e){this.currentIndex=e,this.$emit("tabClick",e)}}},U=Y,z=(n("e4f9"),Object(b["a"])(U,N,V,!1,null,"a9742baa",null)),D=z.exports,J=n("b33d"),R=n("f8c8"),P=n("5d17"),q=n("1bab");function K(){return Object(q["a"])({url:"/home/multidata"})}function Q(e,t){return Object(q["a"])({url:"/home/data",params:{type:e,page:t}})}var W={name:"Home",components:{HomeNav:w,HomeSwipe:x,RecommendView:H,FeatureView:M,TabControl:D,GoodsList:J["a"],BackTop:R["a"],Scroll:P["a"]},data:function(){return{banner:[],recommend:[],titles:["流行","新款","热卖"],goods:{pop:{page:0,list:[]},new:{page:0,list:[]},sell:{page:0,list:[]}},currentType:"pop",tabOffsetTop:0,isTabFixed:!1,showBackTop:!1,saveY:null}},created:function(){var e=this;this.getHomeMultiData(),this.getHomeGoods("pop"),this.getHomeGoods("new"),this.getHomeGoods("sell"),this.$bus.$on("imgLoadItem",(function(){e.$refs.scroll.refresh()}))},deactivated:function(){this.$refs.homeSwiper.stopTimer(),this.saveY=this.$refs.scroll.getScrollY()},activated:function(){var e=this;this.$refs.homeSwiper.startTimer(),this.$nextTick((function(){e.$refs.scroll.scrollTo(0,e.saveY,0)})),this.$refs.scroll.refresh()},computed:{showGoods:function(){return this.goods[this.currentType].list}},methods:{changeGoodsList:function(e){switch(e){case 0:this.currentType="pop";break;case 1:this.currentType="new";break;case 2:this.currentType="sell";break}this.$refs.tabControl1.currentIndex=this.$refs.tabControl2.currentIndex=e},loadMore:function(){this.getHomeGoods(this.currentType),this.$refs.scroll.finishPullUp(),this.$refs.scroll.refresh()},swipeImageLoad:function(){this.tabOffsetTop=this.$refs.tabControl2.$el.offsetTop},scrollContent:function(e){this.isTabFixed=-e.y>this.tabOffsetTop;var t=-1200;this.showBackTop=e.y<t},toTop:function(){this.$refs.scroll.scrollTo(0,0),this.$refs.scroll.refresh()},getHomeMultiData:function(){var e=this;K().then((function(t){var n=t.data;e.banner=n.banner.list,e.recommend=n.recommend.list}))},getHomeGoods:function(e){var t=this,n=this.goods[e].page+1;Q(e,n).then((function(n){var r;(r=t.goods[e].list).push.apply(r,u(n.data.list)),t.goods[e].page+=1}))}}},X=W,Z=(n("0b28"),Object(b["a"])(X,r,s,!1,null,"29e72134",null));t["default"]=Z.exports},b8a6:function(e,t,n){"use strict";var r=n("385e"),s=n.n(r);s.a},e4f9:function(e,t,n){"use strict";var r=n("f0c3"),s=n.n(r);s.a},f0c3:function(e,t,n){}}]);
//# sourceMappingURL=chunk-15e0917c.326c6fe6.js.map