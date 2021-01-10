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
        Dashboard
      </h1>

      <select
        class="ml-8 text-sm"
      >
        <option>Last 2 weeks</option>
      </select>
    </template>

    <article
      class="p-4 flex flex-wrap"
    >
      <h2 class="font-semibold mb-2 w-full">Overview</h2>

      <section
        class="mr-4"
      >
        Leads:  200
      </section>

      <section
        class="mr-4"
      >
        Flows: 200
      </section>
    </article>
  </Main>
</template>
