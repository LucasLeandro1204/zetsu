<script>
import { Icon } from '@zetsu/app-components';
import { mdiDotsVertical } from '@mdi/js';

export default {
  components: {
    Icon,
  },

  setup () {
    return {
      mdiDotsVertical,
    };
  },
};
</script>

<template>
  <p>APP <Icon :icon="mdiDotsVertical" /> </p>
</template>
