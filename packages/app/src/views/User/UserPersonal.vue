<script>
import { defineComponent } from 'vue';

export default defineComponent({
  setup () {
    // useVueli
  },
});
</script>

<template>
  <form
    class="flex flex-col space-y-4"
  >
    <FormField
      name="user.firstName"
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
</template>
