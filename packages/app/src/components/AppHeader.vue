<script setup>
import { inject } from 'vue';

const { pos, editing } = inject('app');
</script>

<template functional>
<header
  class="text-white bg-gradient-to-tr h-9 from-darkest to-darker w-full flex divide-x border-b border-dark divide-x divide-dark"
>
  <span class="px-4 font-mono text-xs h-full items-center flex w-48">X: {{ pos.x }} Y: {{ pos.y }}</span>

  <div class="px-4">
    <span
      v-if="editing.size > 0"
    >
      Editing: {{ editing.size }}
    </span>
  </div>
</header>
</template>
