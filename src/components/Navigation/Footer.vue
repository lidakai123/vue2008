<template>
    <div>
        <van-tabbar  @change="onChange" v-model="active" active-color="#ee0a24" inactive-color="#000">
        <van-tabbar-item icon="home-o">首页</van-tabbar-item>
        <van-tabbar-item icon="search">搜索</van-tabbar-item>
        <van-tabbar-item icon="friends-o">我的</van-tabbar-item>
        </van-tabbar>
    </div>
</template>


<script>
import Vue from 'vue';
import { Tabbar, TabbarItem,Notify} from 'vant';
Vue.use(Tabbar);
Vue.use(TabbarItem);
Vue.use(Notify);
export default {
    data() {
    return {
      active: '0',
      urls: ["/films", "/cinemas", "/center"],
    };
  },
   created() {
        // 纠正刷新之后索引归零的问题
        // 获取路由信息：this.$route
        // this.active = this.urls.indexOf(this.$route.path) > -1 ? this.urls.indexOf(this.$route.path) : 0;
        this.active = this.urls.indexOf(this.$route.path);
    },
  methods: {
    onChange(index) {
     this.$router.push(this.urls[index])
    },
  },
}
</script>