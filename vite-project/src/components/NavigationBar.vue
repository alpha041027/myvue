<!-- 导航栏组件 -->
<template>
    <nav class="bg-gray-800 text-white p-2 fixed w-full z-10 flex justify-center space-x-4">
      <router-link to="/content" class="nav-button">内容页</router-link>
      <router-link to="/user/022/name/lsw" class="nav-button">学生列表</router-link>
    </nav>
  </template>
  
  <style scoped>
  .nav-button {
    padding: 0.5rem 1rem;
    border-radius: 0.25rem;
    text-decoration: none;
    color: white;
    background-color: #4A5568;
    transition: background-color 0.3s ease;
  }
  
  .nav-button:hover {
    background-color: #2D3748;
  }
  </style>
  