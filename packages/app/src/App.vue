<script setup>
import { reactify, TransitionPresets, useMouse, useTransition, useWindowSize } from '@vueuse/core';
import AppHeader from './components/AppHeader.vue';
import Item from './components/Item.vue';
import AppAside from './components/AppAside.vue';
import RBush from 'rbush';
import { computed, inject, provide, reactive, ref, unref, watch } from 'vue';
import Grid from './Grid.vue';

const tree = new RBush();



const useScreenPositions = () => {
  const y = ref(0);
  const x = ref(0);

  const mouse = useMouse();

  const handleMousewheel = (event) => requestAnimationFrame(() => {
    x.value = x.value + Math.round((event.deltaX * .4));
    y.value = y.value + Math.round((event.deltaY * .4));
  });

  return {
    x,
    y,
    handleMousewheel,
    mouseX: computed(() => unref(x) + unref(mouse.x)),
    mouseY: computed(() => unref(y) + unref(mouse.y)),
  };
};

const root = ref(null);
const observer = ref(null);
const editing = reactive(new Set);
const editingClasses = reactive(new Set);

const {
  x,
  y,
  handleMousewheel,
} = useScreenPositions();

const { width, height } = useWindowSize();

const useListItem = ({ classes, ...item }) => {
  const visible = computed(() => unref(x) < item.posX);
  const classList = reactive(new Set(classes.split(' ')));

  return reactive({
    ...item,

    visible,
    classList,
    classes: computed(() => Array.from(classList).join(' ')),

    style: {
      transform: computed(() => `translate3D(${unref(item.posX) - unref(x)}px, ${unref(item.posY) - unref(y)}px, 0)`),
    },
  });
};

const list = {
  'Button': useListItem({
    posX: 300,
    posY: 80,
    key: 'Button',
    tag: 'button',
    classes: 'border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline',
    content: 'Placeholder',
  }),

  'Button success': useListItem({
    posX: 480,
    posY: 80,
    tag: 'button',
    key: 'Button success',
    classes: 'border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline',
    content: 'Placeholder',
  }),
};

watch(
  () => ([...editing]),

  ([first, ...remain]) => {
    editingClasses.clear();

    if (! first) {
      return;
    }

    for (const token of list[first].classList) {
      try {
        for (const key of remain) {
          const next = list[key];

          if (! next.classList.has(token)) {
            throw new Error('Class not set');
          }
        }

        editingClasses.add(token);
      } catch (e) {
        //
      }
    }
  },
);

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
