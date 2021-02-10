import { computed, inject, provide, reactive, ref, unref, watch } from 'vue';
import { debouncedWatch, reactify, TransitionPresets, get, useMouse, useTransition, useWindowSize } from '@vueuse/core';

export const useScreenPosition = () => {
  const { width, height } = useWindowSize();

  const y = ref(0);
  const x = ref(0);

  const speed = .4;
  const mouse = useMouse();

  const handleMousewheel = (event) => requestAnimationFrame(() => {
    set(x, get(x) + Math.round((event.deltaX * speed)));
    set(y, get(y) + Math.round((event.deltaY * speed)));
  });

  return {
    x,
    y,
    handleMousewheel,
    mouseX: computed(() => get(x) + get(mouse.x)),
    mouseY: computed(() => get(y) + get(mouse.y)),
  };
};

export const useScreenItem = ({ classes, ...item }) => {
  const visible = ref(true);

  return reactive({
    ...item,

    visible,
    classes,

    style: {
      width: computed(() => `${item.width}px`),
      height: computed(() => `${item.height}px`),
      transform: computed(() => `translate3D(${unref(item.posX) - unref(x)}px, ${unref(item.posY) - unref(y)}px, 0)`),
    },
  });
};

export const useScreen = () => {
  const tree = new RBush();
  const toUpdate = reactive(new Set);

  /**
   * Debounce item indexing.
   */
  debouncedWatch(() => ([...toUpdate]), (keys) => {
    //
  }, {
    debounce: 3 * 1000,
  });

  return tree;
};
