import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'//导入路由
import "./tailwindcss.css"
import pinia from './store';


createApp(App).
use(router).//注册路由
use(pinia).
mount('#app')
