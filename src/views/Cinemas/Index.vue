<template>
  <div class="header">
    <div class="top">搜索</div>
    <div>
      <input
        type="text"
        placeholder="请输入要搜索的内容"
        @input="searchAction"
      />
      <ul v-if="searchResult.length > 0">
        <li v-for="(item, index) of searchResult" :key="index">
          <div>
            <img :src="item.goods_small_logo" :alt="item.goods_name" />
          </div>
          <h1>{{ item.goods_name }}</h1>
        </li>
      </ul>
      <ul v-else v-show="false">
        <li v-for="(item, index) of courseData" :key="index">
          <div>
            <img :src="item.goods_small_logo" :alt="item.goods_name" />
          </div>
          <h1>{{ item.goods_name }}</h1>
        </li>
      </ul>
    </div>
    <div></div>
  </div>
</template>
<script>
import courseData from "@/data/course.js";
export default {
  name: "APP",
  data() {
    return {
      searchResult: [],
      courseData,
    };
  },
  methods: {
    searchAction(e) {
      const inputValue = e.target.value;

      this.searchResult = this.courseData.filter((item) => {
        if (item.goods_name.includes(inputValue)) 
        return item;
      });
    },
  },
};
</script>
<style scoped>
.header {
  text-align: center;
  width: 100%;
  font-size: 20px;
  line-height: 40px;
}
.top {
  width: 100%;
  height: 40px;
  background-color: green;
}
input {
  margin: 30px 10px 0 0;
  width: 250px;
  height: 40px;
}
.submit {
  display: inline-block;
  color: white;
  font-weight: 400;
  background-color: green;
  height: 45px;
  width: 40px;
}
</style>
