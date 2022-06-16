//专门用于创建整个应用的路由器
import VueRouter from "vue-router";

//引入路由组件
import countfor from '../pages/countfor'
import Hello from '../pages/Hello'
import News from '../pages/News'
import Message from '../pages/Message';

//创建一个路由器
export default new VueRouter({
    routes:[
        {
            path:'/countfor',
            component: countfor
        },
        {
            path:'/Hello',
            component: Hello,
            children:[
                {
                    path:'News',
                    component:News,
                },
                {
                    path:'Message',
                    component:Message,
                },
            ]
        },
    ]
})