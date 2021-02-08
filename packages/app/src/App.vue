<script setup>
import { reactify, TransitionPresets, useMouse, useTransition } from '@vueuse/core';
import { computed, reactive, ref, unref } from 'vue';
import Grid from './Grid.vue';

const y = ref(0);
const x = ref(0);

const mouse = useMouse();

const pos = reactive({
  x: computed(() => unref(x) + unref(mouse.x)),
  y: computed(() => unref(y) + unref(mouse.y)),
});

const handleMousewheel = (event) => {
  x.value += (event.deltaX * .2);
  y.value += (event.deltaY * .2);
};
</script>

<template functional>
  <div class="bg-gray-500 px-4 text-gray-900 absolute">
    X {{ pos.x }} {{ pos.y }}
  </div>
  <div
    @mousewheel="handleMousewheel"
    class="h-screen w-screen bg-gray-800 p-8"
  >
    stuff
  </div>
</template>
