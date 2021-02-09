<script setup>
import { reactify, TransitionPresets, useMouse, useTransition } from '@vueuse/core';
import { computed, reactive, ref, unref, watch } from 'vue';
import Grid from './Grid.vue';

const useMousePos = () => {
  const y = ref(0);
  const x = ref(0);

  const mouse = useMouse();

  const pos = reactive({
    screenX: x,
    screenY: y,
    x: computed(() => Math.round(unref(x) + unref(mouse.x))),
    y: computed(() => Math.round(unref(y) + unref(mouse.y))),
  });

  const handleMousewheel = (event) => requestAnimationFrame(() => {
    x.value += (event.deltaX * .4);
    y.value += (event.deltaY * .4);
  });

  return {
    x,
    y,
    pos,
    handleMousewheel,
  };
};

const {
  pos,
  handleMousewheel,
} = useMousePos()

const useListItem = ({ classes, ...item }) => {
  const classList = reactive(new Set(classes.split(' ')));

  return reactive({
    ...item,

    classList,
    classes: computed(() => Array.from(classList).join(' ')),

    style: {
      transform: computed(() => `translate3D(${unref(item.posX) - pos.screenX}px, ${unref(item.posY) - pos.screenY}px, 0)`),
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

    console.log('afaefaf', editingClasses);
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
</script>

<template functional>
<div
  class="w-full h-full h-screen flex flex-col"
>
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
    class="w-full h-full overflow-hidden bg-gradient-to-tr from-darkest to-darker p-8"
  >
    <div
      class="relative flex w-max ring-offset-2 ring-white ring-offset-gray-900"
      :key="item.key"
      :style="item.style"
      :class="{ 'ring-1 ring-opacity-100': editing.has(item.key) }"
      v-for="item in list"
      @click.stop.prevent="handleItemClick($event, item)"
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
</template>
