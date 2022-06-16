<template>
  <div>
    <body>
      <!--     <button>你好</button>
    <button>计数</button> -->

      <router-link :to="{name:'jishu'}" active-class="active" class="btn">计数组件</router-link>
      <router-link to="/Hello" active-class="active" class="btn">欢迎组件</router-link>
      <h1>单页面导航测试</h1>
      <!-- 指定组件出现位置 -->
      <router-view></router-view>
      <Count></Count>
    </body>
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
body{
  margin-left:30%;
  /* margin-top:200px; */
}
.btn {
  margin: 10px 5px auto;
}
.active {
  background-color: red;
}
</style>
