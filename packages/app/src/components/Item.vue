<script setup>
import { computed, defineProps, inject } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const {
  editing,
} = inject('app');

const isEditing = computed(() => editing.has(props.item.key));
</script>

<template functional>
<div
  class="relative w-max ring-offset-2 ring-white ring-offset-gray-900"
  :style="item.style"
  :class="{ 'ring-1 ring-opacity-100': isEditing }"
>
  <component
    :is="item.tag"
    :class="item.classes"
  >
    {{ item.content }}
  </component>
</div>
</template>
