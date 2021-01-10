<script>
import { defineComponent } from 'vue';
import { Icon } from '@zetsu/app-components';
import { mdiHome } from '@mdi/js';

export default defineComponent({
  inheritAttrs: false,

  components: {
    Icon,
  },

  setup () {
    return {
      mdiHome,
    };
  },
});
</script>

<template>
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
            class="flex items-center"
          >
            <Icon
              :icon="mdiHome"
              class="w-4 mr-2"
            />

            Dashboard
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/themes"
            class="flex items-center"
          >
            <Icon
              :icon="mdiHome"
              class="w-4 mr-2"
            />

            Themes
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/trails"
            class="flex items-center"
          >
            <Icon
              :icon="mdiHome"
              class="w-4 mr-2"
            />

            Trails
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/settings"
            class="flex items-center"
          >
            <Icon
              :icon="mdiHome"
              class="w-4 mr-2"
            />

            Settings
          </RouterLink>
        </li>
      </ol>

      <ol
        class="mt-14"
      >
        <span class="text-xs">Lucas Leandro</span>

        <li>
          <RouterLink
            to="/me"
            class="flex items-center"
          >
            <Icon
              :icon="mdiHome"
              class="w-4 mr-2"
            />

            Profile
          </RouterLink>
        </li>

        <li>
          <RouterLink
            to="/logout"
            class="flex items-center"
          >
            <Icon
              :icon="mdiHome"
              class="w-4 mr-2"
            />

            Sair
          </RouterLink>
        </li>
      </ol>
    </nav>
  </aside>

  <div
    class="flex flex-col flex-1"
  >
    <header
      class="h-14 w-full flex items-end px-4 py-2 border-b"
    >
      <slot
        name="header"
      />
    </header>

    <main
      class="flex"
      v-bind="$attrs"
    >
      <slot />
    </main>
  </div>
</template>
