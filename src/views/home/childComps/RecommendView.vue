<template>
  <div class="recommends">
    <div v-for="item in recommends" :key="item.link" class="recommend-item">
      <!-- <a :href="item.link"> -->
        <img :src="item.image" alt="">
        <div>{{item.title}}</div>
      <!-- </a> -->
    </div>
  </div>
</template>
<script>
export default {
  props:{
    recommends:{
      type:Array,
      default(){
        return []
      }
    }
  }
}
</script>
<style scoped>
 .recommends{
   display: flex;
   text-align: center;
   font-size: 12px;
   padding: 10px 0 20px;
   border-bottom: 10px solid #eee;
 }
 .recommend-item{
   flex: 1;
 }
 .recommend-item img{
   width: 68px;
   height: 68px;
   margin-bottom: 10px;
 }
</style>