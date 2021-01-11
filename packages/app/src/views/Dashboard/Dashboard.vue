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
      class="p-4"
    >
      <section
        class="flex flex-col"
      >
        <h2 class="font-semibold mb-2 w-full">Overview</h2>

        <ul
          class="flex space-x-4"
        >
          <li>
            Active Users:  200
          </li>

          <li>
            Total of Trails runs: 200
          </li>

          <li>
            Finished Trails: 80
          </li>
        </ul>
      </section>
    </article>
  </Main>
</template>
