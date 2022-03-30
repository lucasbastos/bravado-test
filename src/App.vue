<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useUsersStore } from './store';

const mockData = ref();
onMounted(() => {
  mockData.value = useUsersStore().users;
})

</script>

<template>
  <section class="container">
    <input type="text">
    <div class="container__content">
      <div class="container__card" v-for="data in mockData" :key="data.name">
      <img :src="data.avatar" :alt="data.name">
      <h3>{{ data.name }}</h3>
      <p>{{ data.title }}</p>
      <p>{{ data.city }}</p>
      <p>{{ data.address }}</p>
      <p>{{ data.email }}</p>
      </div>
    </div>
  </section>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
body {
  background-color: #EEEEEE;
}
.container {
  margin: 0 auto;
  width: 960px;
  height: 90vh;
  background-color: #FFFF
}
.container__card {
  background-color: #FAFAFA;
  border-radius: 4px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2), 0 25px 50px 0 rgba(0, 0, 0, 0.1);
  display: flex;
  margin: 16px;
  padding: 16px;
  width: 800px;
  height: 200px;
}
.container__content {
  height:85vh;
  overflow:auto;
}
</style>
