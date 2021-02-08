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
    x: computed(() => unref(x) + unref(mouse.x)),
    y: computed(() => unref(y) + unref(mouse.y)),
  });

  const handleMousewheel = (event) => {
    x.value += (event.deltaX * .2);
    y.value += (event.deltaY * .2);
  };

  return {
    x,
    y,
    pos,
    handleMousewheel,
  };
};

const editing = reactive(new Map);
const editingClasses = reactive(new Set);

watch(
  () => ([...editing.values()]),
  ([first, ...remain]) => {
    editingClasses.clear();

    if (! first) {
      return;
    }

    for (const key of first.classList.values()) {
      try {
        for (const next of remain) {
          if (! next.classList.has(key)) {
            throw new Error('Class not set');
          }
        }

        editingClasses.add(key);
      } catch (e) {
        //
      }
    }

    console.log('afaefaf', editingClasses);
  },
);

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
      top: computed(() => `${unref(item.posY) - pos.screenY}px`),
      left: computed(() => `${unref(item.posX) - pos.screenX}px`),
    },
  });
};

const list = [
  useListItem({
    posX: 480,
    posY: 280,
    key: 'Button default',
    tag: 'button',
    classes: 'border border-indigo-500 bg-indigo-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-indigo-600 focus:outline-none focus:shadow-outline',
    content: 'Placeholder',
  }),

  useListItem({
    posX: 620,
    posY: 280,
    tag: 'button',
    key: 'Button success',
    classes: 'border border-green-500 bg-green-500 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-green-600 focus:outline-none focus:shadow-outline',
    content: 'Placeholder',
  }),
];

const handleItemClick = (event, item) => {
  const { key } = item;

  if (event.shiftKey) {
    if (editing.has(key)) {
      editing.delete(key);

      return;
    }

    editing.set(key, item);

    return;
  }

  if (editing.has(key)) {
    return;
  }

  editing.clear();
  editing.set(key, item);
};

const handleEditingReset = () => {
  editing.clear();
};
</script>

<template functional>
  <div
    class="bg-gray-500 px-4 top-0 text-gray-900 absolute"
  >
    X {{ pos.x }} Y {{ pos.y }}
  </div>

<div
  class="bg-gray-500 px-4 top-8 text-gray-900 absolute"
  v-if="editing.size > 0"
>
  Editing {{ editing.size }}
</div>

  <div
    @mousewheel="handleMousewheel"
    @click="handleEditingReset"
    class="h-screen w-screen bg-gray-800 p-8"
  >
    <div
      class="absolute"
      :key="item.key"
      :style="item.style"
      v-for="item in list"
      @click.stop.prevent="handleItemClick($event, item)"
    >
      <component
        class="absolute"
        :is="item.tag"
        :class="item.classes"
      >
        {{ item.content }}
      </component>
    </div>
  </div>
</template>
