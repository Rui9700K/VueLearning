<template>
<div id="root">
  <div class="todo-container">
    <div class="todo-wrap">
      <HeaderInput :receive="receive"></HeaderInput><!-- 给子元素传一个函数，用于获取子元素的数据 -->
      <BodyList :todoObj = "todos" :checkTodo="checkTodo"></BodyList>
      <FooterBox></FooterBox>
    </div>
  </div>
</div>
</template>

<script>
//引入
import HeaderInput from './components/HeaderInput.vue';
import BodyList from './components/BodyList.vue';
import FooterBox from './components/FooterBox.vue';

export default {
    name:'App',
    components:{
        HeaderInput,
        BodyList,
        FooterBox,
    },
    data(){
        return{
            todos:[
                {id:'001',title:'吃饭',done:false},
                {id:'002',title:'睡觉',done:false},
                {id:'003',title:'学习',done:false},
            ]
        }
    },
    methods:{
        //添加一个todo
        receive(get){
            console.log('收到数据了：',get)
            this.todos.unshift(get)
        },
        //勾选或取消勾选一个todo
        checkTodo(id){
            this.todos.forEach((todo) => {
                if(todo.id === id){
                    todo.done = !todo.done
                }
            });
        }
    },
}
</script>

<style>
/*base*/
body {
  background: #fff;
}

.btn {
  display: inline-block;
  padding: 4px 12px;
  margin-bottom: 0;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
  border-radius: 4px;
}

.btn-danger {
  color: #fff;
  background-color: #da4f49;
  border: 1px solid #bd362f;
}

.btn-danger:hover {
  color: #fff;
  background-color: #bd362f;
}

.btn:focus {
  outline: none;
}

.todo-container {
  width: 600px;
  margin: 0 auto;
}
.todo-container .todo-wrap {
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 5px;
}
</style>