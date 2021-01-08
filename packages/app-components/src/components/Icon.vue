<script>
export default {
  props: {
    name: String,

    size: {
      type: [String, Number],
      default: 24,
    },
  },
};
</script>

<template>
  <svg
    :height="size"
    :width="size"
    viewBox="0 0 24 24"
    fill="currentColor"
    class="z-icon inline-block"
  >
    <path :d="icon"></path>
  </svg>
</template>

