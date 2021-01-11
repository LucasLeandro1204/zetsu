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
        class="text-xl leading-none font-semibold"
      >
        Profile
      </h1>
    </template>

    <article
      class="p-4 flex flex-wrap"
    >
      <section
        class="mr-4"
      >
      </section>
    </article>
  </Main>
</template>
