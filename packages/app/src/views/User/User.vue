<script>
import Main from '../Main.vue';
import { reactive, defineComponent } from 'vue';

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

export default defineComponent({
  components: {
    Main,
  },

  setup () {
    return {
      user,
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

        <form
          class="flex flex-col space-y-4"
        >
          <input
            type="text"
            name="firstName"
            v-model="user.firstName"
            placeholder="First name"
            class="bg-gray-100 px-3 py-2"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            v-model="user.lastName"
            class="bg-gray-100 px-3 py-2"
          />
          <input
            type="text"
            name="phone"
            v-model="user.phone"
            placeholder="Phone"
            class="bg-gray-100 px-3 py-2"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            v-model="user.company"
            class="bg-gray-100 px-3 py-2"
          />
          <input
            type="email"
            name="email"
            v-model="user.email"
            placeholder="E-mail"
            class="bg-gray-100 px-3 py-2"
          />
        </form>
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
