<script setup lang="ts">
  import { User } from "../types/user";
  import HighlightText from "./HighlightText.vue";
  const props = defineProps({
    user: {
      type: Object as () => User,
      default: null,
    },
    query: {
      type: String,
      default: "",
      required: false,
    },
  });
  const changeStatus = () => {
    props.user.status = !props.user.status;
    const cardElement = document.querySelector(".card") as HTMLElement;
    cardElement.classList.toggle("card--selected");
  };
</script>

<template>
  <div class="card">
    <img class="card__image" :src="user.avatar" :alt="user.name" />
    <div class="info">
      <div class="info__middle">
        <HighlightText class="info__name" :text="user.name" :query="query" />
        <HighlightText class="info__title" :text="user.title" :query="query" />
        <HighlightText
          class="info__address"
          :text="user.city + ', ' + user.address"
          :query="query"
        />
        <p v-if="!user.status" class="card__toggle" v-on:click="changeStatus">
          MARK AS SUITABLE
        </p>
        <p v-else class="card__toggle" v-on:click="changeStatus">
          SKIP SELECTION
        </p>
      </div>
    </div>
    <div class="test">
      <HighlightText class="info__email" :text="user.email" :query="query" />
    </div>
  </div>
</template>

<style scoped lang="scss">
  p {
    margin: 5px;
  }
  .card {
    width: 524px;
    height: 136px;
    background: #fafafa;
    box-sizing: border-box;
    border: 1px solid #fafafa;
    box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.12), 0px 2px 2px rgba(0, 0, 0, 0.24);
    border-radius: 3px;
    margin-bottom: 20px;
    display: flex;
    flex-direction: row;
    &:hover {
      border: 1px solid #4765ff;
    }
    &__image {
      width: 134px;
      height: 136px;
    }
    &__toggle {
      font-weight: 500;
      font-size: 14px;
      line-height: 16px;
      text-align: center;
      color: #009688;
      cursor: pointer;
    }
    .info {
      &__middle {
        margin-right: 5px;
        margin-left: 5px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        height: 100px;
      }
      &__name {
        font-weight: 400;
        font-size: 22px;
        color: rgba(0, 0, 0, 0.87);
      }
      &__title {
        font-weight: 700;
        font-size: 12px;
        white-space: nowrap;
        text-overflow: ellipsis;
        max-width: 140px;
        color: rgba(0, 0, 0, 0.543846);
      }
      &__address {
        font-weight: 400;
        font-size: 12px;
        color: rgba(0, 0, 0, 0.543846);
      }
    }
    .info__email {
      position: relative;
      max-width: 120px;
    }
    &--selected {
      border: 1px solid #4765ff;
    }
    .test {
      white-space: nowrap;
      overflow: hidden;
      width: 148px;
    }
  }
</style>
