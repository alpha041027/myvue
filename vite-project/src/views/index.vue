<template>
    <!-- <h1>欢迎来到学生信息管理系统！</h1><hr> -->
    <!-- <button><router-link to="/user/024/name/lxy">进入学生列表</router-link></button><br>
    <router-link :to="{name:'member',params:{id:200,name:'lhh'}}">查询字符串传参-动态属性绑定</router-link><br> -->
    <!-- <router-link to="/content">内容页</router-link><br> -->
    <!-- <button @click="goto('/content')">内容页</button>
    <button @click="goto('/user/022/name/lsw')">学生列表</button> -->
    <NavigationBar />
    <div class="min-h-screen flex flex-col">
    <header class="bg-gray-800 text-white p-4 fixed w-full z-10">
      <h1 class="text-2xl font-bold text-center">欢迎来到学生信息管理系统！</h1>
    </header>
    </div>
  <div>
    <main class="flex-grow p-4 mt-16">
      <router-view />
    </main>
  </div>
</template>
      
<script setup>
import NavigationBar from '../components/NavigationBar.vue'
// //编程式导航
//     import { useRouter } from 'vue-router';
//     const router=useRouter();
//     const goto=(lujin)=>{
//         router.push(lujin);
//     }
</script>
      
<style scoped>
body, html, #app {
  margin: 0;
  padding: 0;
  height: 100%;
}

main {
  padding-top: 2rem; 
}
</style>