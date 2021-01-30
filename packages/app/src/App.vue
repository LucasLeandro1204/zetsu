<script>
import { defineComponent, reactive } from 'vue-demi';

const store = reactive({
  menus: {

  },

  page: {},
});

export default defineComponent({
  //
});
</script>

<template>
  <div
    class="flex min-h-screen"
  >
    <RouterView />
  </div>
</template>
