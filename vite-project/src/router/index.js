import { createWebHistory, createRouter } from 'vue-router';
import Index from '@/views/index.vue';
import Content from '@/views/content.vue';
import User from '@/views/user.vue';

// 这些都会传递给 `createRouter`
const routes =[
    {
        path:'/',
        alias:["/index","/home"],//路径别名
        component:Index,
        children:[//嵌套路由
            
            {
            path:'/content',
            component:Content
            },
            {
            path:'/user/:id?/name/:name?',
            name:'member',//定义路由名称
            component:User
            }// 动态字段以冒号开始（动态路由）
        ]
    }
]

//创建路由器
const router = createRouter({
    history:createWebHistory(),//属性-传统模式
    routes,//路由规则
})  

export default router;//导出路由