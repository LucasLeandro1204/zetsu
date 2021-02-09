<script setup>
import { inject } from 'vue';

const { x, y, editing } = inject('app');
</script>

<template functional>
<header
  class="text-white text-sm bg-gradient-to-tr from-darkest to-darker w-full flex divide-x border-b border-dark divide-x divide-dark"
>
  <div class="px-4 h-full font-mono text-xs items-center flex">
    <input class="bg-transparent w-11 mr-1 focus:outline-none" type="text" v-model="x" />
    x
    <input class="bg-transparent w-11 ml-1 focus:outline-none text-right" type="text" v-model="y" />
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
