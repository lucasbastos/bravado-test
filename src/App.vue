<script setup lang="ts">
  import { ref, onMounted, watch } from "vue";
  import { useUsersStore } from "./store";
  import Card from "./components/Card.vue";
  import { useRoute } from "vue-router";

  const mockData = ref();
  onMounted(async () => {
    mockData.value = await useUsersStore().fetchUsers(0);
  });
  const query = ref("");
  const route = useRoute();

  watch(
    () => route.params.query,
    async (value) => {
      const filteredUsers = await useUsersStore().fetchFilteredUsers(
        value as string
      );
      mockData.value = filteredUsers;
    }
  );

  async function fetchMoreUsers() {
    if (!route.params.query) {
      const { scrollTop, scrollHeight, clientHeight } = document.querySelector(
        ".container"
      ) as Element;
      if (scrollTop + clientHeight >= scrollHeight) {
        const moreUsers = await useUsersStore().fetchUsers(
          mockData.value.length
        );
        mockData.value = [...mockData.value, ...moreUsers];
      }
    }
  }
</script>

<template>
  <section class="container" v-on:scroll="fetchMoreUsers">
    <div class="container__search">
      <input type="text" v-model="query" />
      <img src="./assets/seach-icon.svg" alt="" />
    </div>
    <div class="container__content">
      <div class="container__card" v-for="data in mockData" :key="data.name">
        <Card :user="data" :query="query" />
      </div>
    </div>
  </section>
</template>

<style lang="scss">
  .container__search {
    position: relative;
    input {
      padding-left: 4rem;
      width: 458px;
      height: 48px;
      font-weight: 400;
      font-size: 24px;
      line-height: 28px;
      color: rgba(0, 0, 0, 0.75);
    }
    img {
      position: absolute;
      pointer-events: none;
      top: 2rem;
      left: 1.5rem;
      width: 2rem;
    }
  }
  #app {
    font-family: "Roboto", sans-serif;
  }
  body {
    background-color: #eeeeee;
  }
  input {
    width: 40vw;
    height: 48px;
    margin-top: 20px;
    margin-bottom: 20px;

    background: #fafafa;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 2px;
  }
  .container {
    margin: 0 auto;
    width: 564px;
    height: 643px;
    background-color: #ffff;
    overflow: auto;
    padding: 12px;
  }
</style>
