<script>
import { pausableWatch, useEventListener } from '@vueuse/core';
import { defineComponent, isReactive, reactive, isRef, onMounted, ref, toRef, unref, toRefs, watch } from 'vue';

// export const useElementSelector = (body, ignore) => {
//   const element = ref(null);

//   const handleMouseMove = ({ target }) => {
//     const body = unref(body);
//     const previous = unref(element);

//     if (
//       target === previous
//       || ! body.contains(target)
//       || target === ignore
//       || ignore.contains(target)
//     ) {
//       return;
//     }

//     if (previous) {
//       previous.classList.remove('ring ring-3');
//     }

//     target.classList.add('ring ring-3');

//     element.value = target;
//   };

//   return element;
// };

export const useMaybeRef = (target, def = null) => {
  if (isRef(target)) {
    return target;
  }

  return ref(target || def);
};

export const maybeToRef = (target, key, def = null) => {
  const value = target[key];
  const isNotSet = typeof value === 'undefined';

  if (isReactive(target)) {
    if (isNotSet) {
      target[key] = def;
    }

    return toRef(target, key);
  }

  return ref(
    isNotSet
      ? def
      : value
  );
};

export const useMouse = ({
  touch = true,
  root = window,
  resetOnTouchEnds = false,
} = {}) => {
  const state = reactive({
    x: 0,
    y: 0,
    target: null,
  });

  const mouseHandler = ({ pageX, pageY, target }) => {
    state.x = pageX;
    state.y = pageY;

    if (state.target !== target) {
      state.target = target;
    }
  };

  const touchHandler = (event) => {
    if (event.touches.length > 0) {
      const {
        clientX: pageX,
        clientY: pageY,
      } = event.touches[0];

      mouseHandler({ pageX, pageY, target: event.target });
    }
  };

  if (root) {
    useEventListener(root, 'mousemove', mouseHandler, { passive: true });

    if (touch) {
      useEventListener(root, 'touchstart', touchHandler, { passive: true });
      useEventListener(root, 'touchmove', touchHandler, { passive: true });
    }
  }

  return toRefs(state);
};

export const useElementSelector = () => {
  const {
    target,
  } = useMouse();

  const { pause, resume } = pausableWatch(() => target.value, (element, _, onCleanup) => {
    if (! element) {
      return;
    }

    element.classList.add('ring', 'ring-3');

    onCleanup(() => element.classList.remove('ring', 'ring-3'));
  }, {
    immediate: true,
  });

  return {
    pause,
    resume,
    target,
  };
};

export default defineComponent({
  setup () {
    const body = ref(null);
    const root = ref(null);

    const { pause, resume } = useElementSelector();

    return {
      root,
    };
  },
});
</script>

<template>
  <div
    class="flex w-full max-w-full"
  >
  </div>
</template>
