import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './router'//导入路由
import { createPinia } from 'pinia';
import "./tailwindcss.css"

const pinia = createPinia();

createApp(App).
use(router).//注册路由
use(pinia).
mount('#app')
