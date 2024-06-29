<!-- 导航栏组件 -->
<template>
    <nav>
      <router-link to="/content" class="nav-button">内容页</router-link>
      <router-link to="/user/024/id/lxy" class="nav-button">学生列表</router-link>
    </nav>
  </template>
  
  <style scoped>
  .nav-button {
    background-color: #1abc9c;
    color: white;
    border: none;
    padding: 10px 20px;
    margin-left: 10px;
    font-size: 1rem;
    cursor: pointer;
    border-radius: 25px;
    transition: background-color 0.3s, transform 0.3s;
  }

  .nav-button:hover {
    background-color: #16a085;
    transform: scale(1.05);
  }
  </style>
  