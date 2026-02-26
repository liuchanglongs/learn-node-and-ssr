<template>
  <div class="app" style="border: 1px solid red">
    <h2>Vue3 App</h2>
    <div>{{ count }}</div>
    <button @click="addCounter">+1</button>

    <div>
      <router-link to="/">
        <button>home</button>
      </router-link>
      <router-link to="/about">
        <button>about</button>
      </router-link>
    </div>
    <!-- 路由的占位 -->
    <router-view></router-view>
  </div>
</template>

<script setup>
import { ref } from "vue";
const count = ref(100);
function addCounter() {
  count.value++;
}
</script>
