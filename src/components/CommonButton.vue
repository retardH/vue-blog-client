<script setup>
defineProps(['bgClr'])
</script>

<template>
  <button class="px-7 py-2" :class="bgClr">
    <slot></slot>
  </button>
</template>