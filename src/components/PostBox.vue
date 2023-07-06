<script setup>

</script>

<template>
  <div class="w-full bg-white post-box flex flex-col gap-2 py-8 px-5 cursor-pointer">
    <div class="flex items-center gap-2">
      <span class="text-sm text-slate-600">By John Doe</span>
      <span class="text-sm text-slate-600">|</span>
      <span class="text-sm text-slate-600">Aug 23, 2023</span>
    </div>
    <h4 class="text-black text-xl w-3/5">
      <slot name="title"></slot>
    </h4>
  </div>
</template>

<style>
.post-box {
  transition: all 0.3s ease-in-out;
}
.post-box:hover {
  background-color: rgba(251, 246, 234, 1);
}
</style>