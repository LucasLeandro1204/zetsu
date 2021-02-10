<script setup>
import { inject } from 'vue';

const { x, y, editing } = inject('app');
</script>

<template functional>
<header
  class="text-white text-sm bg-darkest flex divide-x border-b border-dark divide-x divide-dark"
>
  <div class="px-4 h-full font-mono text-sm items-center flex">
    <input class="bg-transparent w-11 mr-1 focus:outline-none" type="text" v-model.number="x" />
    x
    <input class="bg-transparent w-11 ml-1 focus:outline-none text-right" type="text" v-model.number="y" />
  </div>

  <div class="px-4">
    <span
      v-if="editing.size > 0"
    >
      Editing: {{ editing.size }}
    </span>
  </div>
</header>
</template>
