<script>
import Main from '../Main.vue';
import { reactive, defineComponent, provide as _provide, toRefs } from 'vue';
import { FormField } from '@zetsu/app-components';
import { useVuelidate } from '@vuelidate/core'
import UserPersonal from './UserPersonal.vue';
import { email, required } from '@vuelidate/validators'

const useForm = (key, data) => {
  // provide(key);
};

/**
 * User client model.
 */
export const user = reactive({
  id: 0,
  tenantId: 0,

  lastName: 'Doe',
  firstName: 'John',

  email: 'john@doe.com',
  phone: '48 9 9687 9956',
  company: 'John Doe LTDA',

  createdAt: new Date(),
  updatedAt: new Date(),
});

export const useUser = () => {
  const refs = toRefs(user);

  const personal = useVuelidate({
    lastName: {
      required,
    },

    firstName: {
      required,
    },

    email: {
      email,
    },
  }, refs);

  const security = useVuelidate({

  }, refs);

  const state = reactive({
    ...refs,
    personal,
    security,
  });

  return state;
};

export default defineComponent({
  components: {
    Main,
    FormField,
    UserPersonal,
  },

  setup () {
    const state = useUser();

    return {
      state,
    };
  },
});
</script>

<template>
  <Main>
    <template
      #header
    >
      <h1
        class="text-xl leading-none font-semibold"
      >
        Profile
      </h1>
    </template>

    <article
      class="flex flex-1 divide-x divide-gray-100"
    >
      <section
        class="flex-1 p-4"
      >
        <h2 class="mb-4">Personal info</h2>

        <!-- <UserPersonal /> -->
      </section>

      <section
        class="flex-1 p-4"
      >
        <h2 class="mb-4">Security</h2>

        <form
          class="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="currentPassword"
            placeholder="Current password"
            class="bg-gray-100 px-3 py-2"
          />

          <input
            type="text"
            name="password"
            placeholder="New password"
            class="bg-gray-100 px-3 py-2"
          />

          <input
            type="text"
            name="passwordConfirmation"
            placeholder="New password confirmation"
            class="bg-gray-100 px-3 py-2"
          />
        </form>
      </section>
    </article>
  </Main>
</template>
