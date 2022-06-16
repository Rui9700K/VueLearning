<template>
  <div>
<!--     <button>你好</button>
    <button>计数</button> -->
    
    <router-link to="/countfor" active-class="active" class="btn">计数组件</router-link>
    <router-link to="/Hello" active-class="active" class="btn">欢迎组件</router-link>
    <h1>这里是标题</h1>
    <!-- 指定组件出现位置 -->
    <router-view></router-view>
    <Count></Count>
  </div>
</template> 

<script>
//引入
import axios from "axios";
import Count from "./components/Count.vue";

export default {
  name: "App",
  components: {
    Count,
  },
};
</script>

<style scoped>
  .btn{
    margin: 10px 5px auto;
  }
  .active{
    background-color:red;
  }
</style>
