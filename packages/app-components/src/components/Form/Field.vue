<script>
import { defineComponent, defineProps } from 'vue';

export default defineComponent({
  props: defineProps({
    name: {

    },

    modelValue: {
      type: [String, Number],
    },
  }),

  setup () {
    const inject = defineProps({

    });
  },
});
</script>

<template>
  <textarea
    v-if="type === 'textarea'"
    class="bg-gray-100 px-3 py-2"
  />

  <input
    v-else
    :type="type"
    class="bg-gray-100 px-3 py-2"
  />
</template>
