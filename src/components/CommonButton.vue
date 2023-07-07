<script setup>
defineProps(['bgClr'])
</script>

<template>
  <button class="px-7 py-3 flex items-center justify-center" :class="bgClr ">
    <slot></slot>
  </button>
</template>