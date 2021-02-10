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
