<script>
import { computed, defineComponent, toRef, unref } from 'vue';

export const TAGS = [
  'h1',
  'h2',
  'h3',
];

export default defineComponent({
  props: {
    tag: {
      type: String,
      required: false,
      default: 'h1',
      validate: tags => TAGS.includes(tags),
    },
  },
});
</script>

<template>
  <header
    class="flex w-full"
  >
    <component
      :is="tag"
    >
      <slot />
    </component>
  </header>
</template>
