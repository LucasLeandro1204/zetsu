<script setup>
import { computed, inject, provide, reactive, ref, unref, watch } from 'vue';
import { debouncedWatch, reactify, TransitionPresets, useMouse, useTransition, useWindowSize } from '@vueuse/core';
import AppHeader from './components/AppHeader.vue';
import Item from './components/Item.vue';
import AppAside from './components/AppAside.vue';
import { useScreenItem, useScreenPosition } from './composables/screen';

const root = ref(null);
const observer = ref(null);

const editing = reactive(new Set);

const {
  screenX,
  screenY,
  handleMousewheel,
} = useScreenPosition();

const list = [
  useScreenItem({
    posY: 80,
    posX: 300,
    height: 50,
    width: 130,
  }),
];

provide('app', {
  screenX,
  screenY,
  editing,
});
</script>

<template functional>
<header
  class="text-white text-sm border-b border-dark items-center h-8 bg-darkest flex justify-center"
>
  <h1>ZETSU</h1>
</header>

<div
  class="w-full h-full flex-1 flex bg-gradient-to-tr from-darkest to-darker"
>
  <RouterView />
</div>
</template>
