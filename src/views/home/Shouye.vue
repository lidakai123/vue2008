<template>
  <div id="home">
    <nav-bar class="home-nav"><div slot="center">购物街</div></nav-bar>
    <tab-control
      class="tab-control"
      ref="tabControl1"
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
      v-show="isTabFixed"
    />
    <scroll
      class="content"
      ref="scroll"
      @scroll="contentScroll"
      @pullingUp="loadMore"
      :data="showGoods"
      :pull-up-load="true"
      :probe-type="3"
    >
      <div>
        <home-swiper :banners="banners" @swiperImageLoad="swiperImageLoad" />
        <recommend-view :recommends="recommends" />
        <feature-view />
        <tab-control
          ref="tabControl2"
          :titles="['流行', '新款', '精选']"
          @tabClick="tabClick"
        />
        <goods-list :goods="showGoods" />
      </div>
    </scroll>
    <back-top @backTop="backTop" class="back-top" v-show="showBackTop">
      <img src="~assets/img/common/top.png" alt="" />
    </back-top>
  </div>
</template>

<script>
import HomeSwiper from "./childComps/HomeSwiper";
import RecommendView from "./childComps/RecommendView";
import FeatureView from "./childComps/FeatureView";

import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import { getHomeMultiData, getHomeGoodsData } from "@/api/home";
import { debounce } from "@/common/utils";

export default {
  components: {
    HomeSwiper,
    RecommendView,
    FeatureView,
    NavBar,
    TabControl,
    GoodsList,
    Scroll,
    BackTop,
  },
  data() {
    return {
      // 轮播图和好物推荐
      banners: [],
      recommends: [],
      // 选项卡
      goods: {
        pop: { page: 0, list: [] }, //流行
        new: { page: 0, list: [] }, //新款
        sell: { page: 0, list: [] }, //精选
      },
      // 页面默认展示的数据
      currentType: "pop",
      showBackTop: false,
      tabOffsetTop: 0,
      isTabFixed: false,
    };
  },
  computed: {
    showGoods() {
      return this.goods[this.currentType].list;
    },
  },
  created() {
    // 1.请求轮播图和好物推荐的数据
    this.getHomeMultiData();
    // 2.请求商品的数据(选项卡)
    this.getHomeGoodsData("pop");
    this.getHomeGoodsData("new");
    this.getHomeGoodsData("sell");
  },
  mounted() {
    // 1.事件监听item中图片加载完成,调用防抖函数，提高性能
    const refresh = debounce(this.$refs.scroll.refresh, 500);
    this.$eventBus.$on("ItemImageLoad", () => {
      refresh();
    });
  },
  methods: {
    /**
     * 事件监听相关的方法
     */
    tabClick(index) {
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
      this.$refs.tabControl1.currentIndex = index
      this.$refs.tabControl2.currentIndex = index
    },
    // 获取选项卡距离顶部的高度
    // 所有的组件都有一个属性$el,用来获取组件里面的标签
    swiperImageLoad() {
      this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop;
    },
    contentScroll(position) {
      // 1.决定选项卡是否吸顶(position:fixed)
      this.isTabFixed = -position.y > this.tabOffsetTop;
      // 2.判断backTop是否显示
      this.showBackTop = -position.y > 500;
    },
    // 上拉加载更多
    loadMore() {
      this.getHomeGoodsData(this.currentType);
    },
    // 回到顶部
    backTop() {
      this.$refs.scroll.scrollTo(0, 0, 300);
    },

    /**
     * 网络请求相关的方法
     */
    getHomeMultiData() {
      getHomeMultiData().then((res) => {
        this.banners = res.data.banner.list;
        this.recommends = res.data.recommend.list;
      });
    },
    getHomeGoodsData(type) {
      // 动态获取页数
      const page = this.goods[type].page + 1;
      getHomeGoodsData(type, page).then((res) => {
        // 存储数据,如何把一个数组放到另一个数组中？使用 ... 运算符，把里面的数据展开
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;

        // 完成上拉加载更多
        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>
<style scoped>
#home {
  /* padding-bottom: 44px; */
  /* vh 页面视口高度 */
  height: 100vh;
}
.home-nav {
  background: var(--color-tint);
  color: #fff;
  /* 在使用浏览器原生滚动时，为了让导航栏不跟随一起滚动 */
  /* position: fixed;
  right: 0;
  top: 0;
  left: 0;
  z-index: 9; */
}
.content {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
.back-top {
  position: fixed;
  right: 10px;
  bottom: 60px;
}
.tab-control{
  position: relative;
  z-index: 9;
}

</style>
