<script setup lang="ts">
  import { onUpdated, ref } from "vue";

  const props = defineProps({
    text: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
  });

  const highlight = ref("");
  const originalText = ref(props.text);

  const debounce = (fn: Function, ms = 500) => {
    let timeoutId: ReturnType<typeof setTimeout>;
    return function (this: any, ...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn.apply(this, args), ms);
    };
  };
  const highlightText = debounce(() => {
    const regex = new RegExp(props.query, "gi");
    const match = props.text.match(regex);
    if (match) {
      highlight.value = props.text.replace(
        regex,
        `<span class="highlight">${match}</span>`
      );
    } else {
      highlight.value = originalText.value;
    }
  });
  onUpdated(() => {
    highlightText();
  });
</script>

<template>
  <p v-if="query.length > 0" v-html="highlight"></p>
  <p v-else>{{ text }}</p>
</template>

<style lang="scss">
  .highlight {
    background-color: yellow;
  }
</style>
