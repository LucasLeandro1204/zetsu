import { computed, inject, provide, reactive, ref, unref, watch } from 'vue';
import { debouncedWatch, reactify, TransitionPresets, set, get, useMouse, useTransition, useWindowSize } from '@vueuse/core';
import RBush from 'rbush';

export const useScreenPosition = () => {
  const { width, height } = useWindowSize();

  const screenX = ref(0);
  const screenY = ref(0);

  const speed = .4;
  const mouse = useMouse();

  const handleMousewheel = (event) => requestAnimationFrame(() => {
    set(screenX, get(screenX) + Math.round((event.deltaX * speed)));
    set(screenY, get(screenY) + Math.round((event.deltaY * speed)));
  });

  return {
    screenX,
    screenY,
    handleMousewheel,
    mouseX: computed(() => get(screenX) + get(mouse.x)),
    mouseY: computed(() => get(screenY) + get(mouse.y)),
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
