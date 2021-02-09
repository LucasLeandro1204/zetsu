<script setup>
import { reactify, TransitionPresets, useMouse, useTransition, useWindowSize } from '@vueuse/core';
import AppHeader from './components/AppHeader.vue';
import { computed, inject, provide, reactive, ref, unref, watch } from 'vue';
import Grid from './Grid.vue';

const useScreenPositions = () => {
  const y = ref(0);
  const x = ref(0);

  const mouse = useMouse();

  const handleMousewheel = (event) => requestAnimationFrame(() => {
    x.value = Math.max(0, x.value + Math.round((event.deltaX * .4)));
    y.value = Math.max(0, y.value + Math.round((event.deltaY * .4)));
  });

  return {
    x,
    y,
    handleMousewheel,
    mouseX: computed(() => unref(x) + unref(mouse.x)),
    mouseY: computed(() => unref(y) + unref(mouse.y)),
  };
};

const {
  x,
  y,
  handleMousewheel,
} = useScreenPositions();

const root = ref(null);

const observer = ref(null);

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

const list = {};

for (let i = 0; i < 50; i++) {
  const key = `Button ${i}`;

  list[key] = useListItem({
    posX: 300,
    posY: 100 + (80 * i),
    key,
    tag: 'button',
    classes: 'border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none :bhoverg-indigo-600 focus:outline-none focus:shadow-outline',
    content: 'Placeholder',
  });
}

// const list = {
//   'Button': useListItem({
//     posX: 300,
//     posY: 80,
//     key: 'Button',
//     tag: 'button',
//     classes: 'border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none :bhoverg-indigo-600 focus:outline-none focus:shadow-outline',
//     content: 'Placeholder',
//   }),

//   'Button success': useListItem({
//     posX: 480,
//     posY: 80,
//     tag: 'button',
//     key: 'Button success',
//     classes: 'border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline',
//     content: 'Placeholder',
//   }),
// };

const editing = reactive(new Set);
const editingClasses = reactive(new Set);

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

  editing.clear();
  editing.add(key);
};

const handleEditingReset = () => {
  if (editing.size === 0) {
    return;
  }

  editing.clear();
};

const handleRemoveClass = (token) => {
  for (const key of editing) {
    const item = list[key];

    item.classList.delete(token);
  }

  editingClasses.delete(token);
};

const handleAddClass = (event) => {
  const token = event.target.value;

  event.target.value = '';

  for (const key of editing) {
    const item = list[key];

    if (item.classList.has(token)) {
      continue;
    }

    item.classList.add(token);
  }

  if (editingClasses.has(token)) {
    return;
  }

  editingClasses.add(token);
};

provide('app', {
  x,
  y,
  editing,
});
</script>

<template functional>
<div
  class="w-full h-full h-screen flex flex-col"
>
  <AppHeader />

  <!-- <div
    class="px-4 top-8 text-white absolute"
    v-if="editing.size > 0"
  >
    <input
      type="text"
      class="bg-transparent"
      placeholder="Add class"
      @keydown.enter="handleAddClass"
    />

    <ul>
      <li
        v-for="token in editingClasses.values()"
        :key="token"
        class="flex items-center justify-between"
      >
        {{ token }}

        <button
          class="ml-4"
          @click="handleRemoveClass(token)"
        >
          X
        </button>
      </li>
    </ul>
  </div> -->

  <div
    @mousewheel="handleMousewheel"
    @click="handleEditingReset"
    ref="root"
    class="w-full h-full overflow-hidden bg-gradient-to-tr from-darkest to-darker p-8"
  >
    <div
      class="relative h-0 flex w-max ring-offset-2 ring-white ring-offset-gray-900"
      :key="item.key"
      :style="item.style"
      :class="{ 'ring-1 ring-opacity-100': editing.has(item.key) }"
      v-show="item.visible"
      v-for="item in list"
      @click.stop.prevent="handleItemClick($event, item)"
    >
      <div
      >
        <component
          :is="item.tag"
          :class="item.classes"
        >
          {{ item.content }}
        </component>
      </div>
    </div>
  </div>
</div>
</template>
