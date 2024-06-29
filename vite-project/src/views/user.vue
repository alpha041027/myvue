<template>
<!-- 路径传递参数 -->
  <!-- id:{{ $route.params.id }}<br>
    name:{{ $route.params.name}}<br> -->
  <div class="list-comp p-6">
    <h1 class="text-2xl text-center mb-6">User List</h1>
    <div class="tool-bar flex justify-end mb-6">
      <button class="add-btn bg-gray-800 text-white py-2 px-4 rounded" @click="addUser">新增</button>
    </div>
    <ul class="space-y-4">
      <li class="flex justify-between bg-gray-200 p-4 rounded">
        <span class="nu w-1/6">序号</span>
        <span class="sid w-1/6">学号</span>
        <span class="name w-1/6">姓名</span>
        <span class="year w-1/6">年龄</span>
        <span class="operation w-2/6 text-center">操作</span>
      </li>
      <li v-for="(item, index) in userStore.list" :key="item.id" class="flex justify-between items-center p-4 rounded bg-white shadow-md">
        <span class="nu w-1/6">{{ index + 1 }}</span>
        <span class="sid w-1/6">{{ item.id }}</span>
        <span class="name w-1/6">{{ item.userName }}</span>
        <span class="year w-1/6">{{ item.age }}</span>
        <div class="operation w-2/6 flex justify-around">
          <button @click="deleteUser(index)" class="bg-red-500 text-white py-2 px-4 rounded">删除</button>
          <button @click="editUser(index)" class="bg-yellow-500 text-white py-2 px-4 rounded">编辑</button>
          <button @click="getYourName(item.id)" class="bg-blue-500 text-white py-2 px-4 rounded">问名字</button>
        </div>
      </li>
    </ul>
  </div>
  <div class="pop-blank fixed inset-0 bg-gray-700 bg-opacity-75 flex items-center justify-center" v-if="showflag">
    <div class="bg-white p-6 rounded-lg shadow-lg w-1/2">
      <h3 class="text-center text-2xl mb-6">{{ isEdit ? '编辑学生' : '新增学生' }}</h3>
      <div class="blank-body space-y-4 mb-6">
        <div class="blank-item flex items-center">
          <span class="mr-4 w-24">学号</span>
          <input type="text" v-model="sid" class="flex-grow p-2 border rounded">
        </div>
        <div class="blank-item flex items-center">
          <span class="mr-4 w-24">姓名</span>
          <input type="text" v-model="name" class="flex-grow p-2 border rounded">
        </div>
        <div class="blank-item flex items-center">
          <span class="mr-4 w-24">年龄</span>
          <input type="text" v-model="year" class="flex-grow p-2 border rounded">
        </div>
      </div>
      <div class="footer flex justify-end space-x-4">
        <button @click="cancel" class="py-2 px-4 border border-blue-500 text-blue-500 rounded">取消</button>
        <button @click="submitFn" class="py-2 px-4 bg-blue-500 text-white rounded">确定</button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useUserStore } from '../store/user';

const userStore = useUserStore();

const showflag = ref(0);
const isEdit = ref(false);
const curIdx = ref(0);

const sid = ref(0);
const name = ref('');
const year = ref(0);

const addUser = () => {
  isEdit.value = false;
  sid.value = '';
  name.value = '';
  year.value = '';
  showflag.value = true;
};

const deleteUser = index => {
  userStore.list.splice(index, 1);
};

const editUser = index => {
  isEdit.value = true;
  curIdx.value = index;
  const item = userStore.list[index];
  sid.value = item.id;
  name.value = item.userName;
  year.value = item.age;
  showflag.value = true;
};

const getYourName = id => {
  const student = userStore.list.find(item => item.id === id);
  alert(student.userName);
};

const cancel = () => {
  showflag.value = false;
};

const submitFn = () => {
  const newUser = {
    id: sid.value,
    userName: name.value,
    age: year.value
  };

  if (isEdit.value) { // 编辑
    userStore.list.splice(curIdx.value, 1);
  }

  userStore.list.unshift(newUser);

  showflag.value = false;
};
</script>
