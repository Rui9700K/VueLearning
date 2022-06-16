//引入vue
import Vue from 'vue'

//引入App
import App from './App'

//引入bootstrap
import 'bootstrap'
import $ from 'jquery'

Vue.config.productionTip = false

/* const Demo = Vue.extend({})
const d = new Demo()
Vue.prototype.x = d */
/* console.log(Vue.prototype) */

//创建实例对象
import vueResource from "vue-resource";

//引入store
import store from './vuex/store';

//引入 VueRouter
import VueRouter from 'vue-router';

//引入路由器
import router from './router';

//应用
Vue.use(vueResource)
Vue.use(VueRouter)

new Vue({
  el:"#root",
  render:h =>h(App),
  store,
  beforeCreate(){
    Vue.prototype.$bus = this //安装全局事件总线
  },
  router:router
})
