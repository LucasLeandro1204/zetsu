<script setup>
import { get } from '@vueuse/core';
import { computed, defineProps, inject, reactive } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const { item } = props;

const {
  screenX,
  screenY,
  editing,
} = inject('app');

const isEditing = computed(() => editing.has(props.item.key));

const style = reactive({
  width: computed(() => `${item.width}px`),
  height: computed(() => `${item.height}px`),
  transform: computed(() => `translate3D(${get(item.posX) - get(screenX)}px, ${get(item.posY) - get(screenY)}px, 0)`),
});
</script>

<template functional>
<div
  class="absolute transform-gpu w-max ring-offset-2 ring-white ring-offset-gray-900"
  :style="style"
  :class="{ 'ring-1 ring-opacity-100': isEditing }"
>
  <component
    :is="item.tag"
    :class="item.classes"
  >
   a {{ item.content }}
  </component>
</div>
</template>
