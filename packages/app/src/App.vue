<script setup>

</script>

<template functional>
<header
  class="text-white text-sm border-b border-dark items-center h-8 bg-darkest flex justify-center"
>
  <h1>ZETSU</h1>
</header>

<div
  class="w-full h-full flex-1 flex bg-gradient-to-tr from-darkest to-darker"
>
  <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <pattern id="grid" x="-30" width="32px" height="32px" patternUnits="userSpaceOnUse">
      <rect width="100%" height="100%" stroke="currentColor" stroke-width="1px"/>
    </pattern>
  </defs>

  <rect width="100%" height="100%" fill="url(#grid)" />
</svg>
</div>
</template>
