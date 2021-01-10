<script>
import { Icon } from '@zetsu/app-components';
import { mdiHome } from '@mdi/js';

export default {
  components: {
    Icon,
  },

  setup () {
    return {
      mdiHome,
    };
  },
};
</script>

<template>
  <div
    class="flex min-h-screen"
  >
    <aside
      class="border-r"
    >
      <span
        class="text-3xl h-14 flex items-center justify-center border-b block text-blue-500 font-bold"
      >
        Zetsu
      </span>

      <nav
        class="p-4"
      >
        <ol
          class=""
        >
          <li>
            <RouterLink
              to="/dashboard"
            >
              <Icon
                :icon="mdiHome"
              />

              Dashboard
            </RouterLink>
          </li>
        </ol>
      </nav>
    </aside>

    <div
      class="flex flex-col flex-1"
    >
      <RouterView />
    </div>
  </div>
</template>
