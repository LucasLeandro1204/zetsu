<script setup>
import { computed, inject, provide, reactive, ref, unref, watch } from 'vue';
import { debouncedWatch, reactify, TransitionPresets, useMouse, useTransition, useWindowSize } from '@vueuse/core';
import AppHeader from './components/AppHeader.vue';
import Item from './components/Item.vue';
import AppAside from './components/AppAside.vue';
import useItem from './composables/useItem';
import { useScreenItem, useScreenPosition } from './composables/useScreen';
import RBush from 'rbush';

const root = ref(null);
const observer = ref(null);

const editing = reactive(new Set);

const {
  x,
  y,
  handleMousewheel,
} = useScreenPosition();

const list = [
  useScreenItem({
    posX: 300,
    posY: 80,
    width: 130,
    height: 50,
    key: 'Button',
    tag: 'button',
    classes: 'border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline',
    content: 'Placeholder',
  }),

  useScreenItem({
    posX: 480,
    posY: 80,
    width: 120,
    height: 42,
    tag: 'button',
    key: 'Button success',
    content: 'Placeholder',
    classes: 'border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline',
  }),
];

const handleEditingReset = () => {
  if (editing.size === 0) {
    return;
  }

  editing.clear();
};

const handleItemClick = (event, { key }) => {
  if (event.shiftKey) {
    if (editing.has(key)) {
      editing.delete(key);

      return;
    }

    editing.add(key);

    return;
  }

  if (editing.has(key)) {
    return;
  }

  handleEditingReset();

  editing.add(key);
};

provide('app', {
  x,
  y,
  editing,
});
</script>

<template functional>
<div
  class="w-full h-full h-screen flex"
>
  <AppAside
    class="w-9 h-full z-20"
  />

  <div
    class="flex-1 flex flex-col h-full"
  >
    <AppHeader
      class="h-9 w-full z-20"
    />

    <main
      @mousewheel="handleMousewheel"
      @click="handleEditingReset"
      ref="root"
      class="w-full z-10 h-full overflow-hidden bg-gradient-to-tr from-darkest to-darker p-8"
    >
      <Item
        :key="item.key"
        :item="item"
        v-for="item in list"
        @click.stop="handleItemClick($event, item)"
      />
    </main>
  </div>
</div>
</template>
