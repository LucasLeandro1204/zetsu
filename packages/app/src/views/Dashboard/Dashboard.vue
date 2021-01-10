<script>
import Main from '../Main.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Main,
  },
});
</script>

<template>
  <Main
    class="flex-col"
  >
    <template
      #header
    >
      <h1
        class="text-xl font-semibold"
      >
        Dashboard
      </h1>
    </template>

    <article
      class="p-4"
    >
      <h2>Visão geral</h2>
    </article>
  </Main>
</template>
