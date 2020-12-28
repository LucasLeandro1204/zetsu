<script>
import { defineComponent } from 'vue';
import Text from './components/Text.vue';
import Header from './components/Header.vue';

export default defineComponent({
  components: {
    Text,
    Header,
  },
});
</script>

<template>
  <div
    class="flex w-full max-w-full"
  >
    <aside class="flex flex-shrink-0 w-32">
      <nav>
        Sidebar
      </nav>
    </aside>

    <main
      class="flex flex-col bg-white w-full max-w-min"
    >
      <Header
        tag="h1"
      >
        <template
          #default
        >
          Dashboard
        </template>
      </Header>
    </main>
  </div>
</template>
