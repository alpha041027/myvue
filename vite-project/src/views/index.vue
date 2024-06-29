<template>
<!-- <h1>欢迎来到学生信息管理系统！</h1><hr> -->
<!-- <button><router-link to="/user/024/name/lxy">进入学生列表</router-link></button><br>
  <router-link :to="{name:'member',params:{id:200,name:'lhh'}}">查询字符串传参-动态属性绑定</router-link><br> -->
 <!-- <router-link to="/content">内容页</router-link><br> -->
 <!-- <button @click="goto('/content')">内容页</button>
  <button @click="goto('/user/022/name/lsw')">学生列表</button> -->
  <div class="container">
    <header class="header">
      <div class="title">欢迎来到学生信息管理系统！</div>
      <div class="button-group">
        <NavigationBar />
      </div>
    </header>
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import NavigationBar from '../components/NavigationBar.vue'
// //编程式导航
//     import { useRouter } from 'vue-router';
//     const router=useRouter();
//     const goto=(lujin)=>{
//         router.push(lujin);
//     }
</script>

<style scoped>
  body, html, #app {
    margin: 0;
    padding: 0;
    height: 100%;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    background-color: #f0f2f5;
    color: #333;
  }

  .container {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

  .header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #34495e;
    color: white;
    padding: 20px;
    width: 1000px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }

  .title {
    margin: 0 auto;
    font-size: 2rem;
    font-weight: 600;
    text-align: center;
  }

  .button-group {
    display: flex;
    gap: 10px;
  }

  .main {
    flex-grow: 1;
    padding: 20px;
    background-color: white;
    margin: 20px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    border-radius: 8px;
  }

  .navigation-bar {
    background-color: #333;
    padding: 10px;
  }

  .navigation-bar a {
    color: white;
    text-decoration: none;
    margin: 0 15px;
  }

  .navigation-bar a:hover {
    text-decoration: underline;
  }
</style>
