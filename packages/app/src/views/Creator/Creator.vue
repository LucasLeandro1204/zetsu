<script setup>

const handleEditingReset = () => {
  if (editing.size === 0) {
    return;
  }

  editing.clear();
};

const handleItemClick = (event, { key }) => {
  if (event.shiftKey) {
    if (editing.has(key)) {
      editing.delete(key);

      return;
    }

    editing.add(key);

    return;
  }

  if (editing.has(key)) {
    return;
  }

  handleEditingReset();

  editing.add(key);
};

</script>

<template>
<aside
  class="bg-darkest border-r border-darker w-12"
>

</aside>

<main
  ref="root"
  class="w-full z-10 h-full overflow-hidden p-8"
>
aa
</main>
</template>

