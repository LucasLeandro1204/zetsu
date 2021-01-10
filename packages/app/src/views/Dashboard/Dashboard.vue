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
        class="ml-auto bg-gray-100 h-full rounded px-4 text-sm"
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
        Active Users:  200
      </section>

      <section
        class="mr-4"
      >
        Total of Trails runs: 200
      </section>

      <section
        class="mr-4"
      >
        Finished Trails: 80
      </section>
    </article>
  </Main>
</template>
