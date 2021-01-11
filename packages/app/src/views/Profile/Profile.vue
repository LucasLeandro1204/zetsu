<script>
import Main from '../Main.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: {
    Main,
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
            placeholder="First name"
            class="bg-gray-100 px-3 py-2"
          />
          <input
            type="text"
            name="lastName"
            placeholder="Last name"
            class="bg-gray-100 px-3 py-2"
          />
          <input
            type="text"
            name="phone"
            placeholder="Phone"
            class="bg-gray-100 px-3 py-2"
          />
          <input
            type="text"
            name="company"
            placeholder="Company"
            class="bg-gray-100 px-3 py-2"
          />
          <input
            type="email"
            name="email"
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
