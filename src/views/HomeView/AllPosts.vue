<script setup>

import PostBox from "@/components/PostBox.vue";
</script>

<template>
  <div class="col-span-1 px-6">
    <div class="w-full flex items-center justify-between">
      <h4 class="text-3xl text-black mb-6">All Posts</h4>
      <button class="bg-transparent text-violet-500 text-base">View All</button>
    </div>
    <PostBox>
      <template #title>
        8 Figma design systems that you can download for free today.
      </template>
    </PostBox>
    <PostBox>
      <template #title>
        8 Figma design systems that you can download for free today.
      </template>
    </PostBox>
    <PostBox>
      <template #title>
        8 Figma design systems that you can download for free today.
      </template>
    </PostBox>
    <PostBox>
      <template #title>
        8 Figma design systems that you can download for free today.
      </template>
    </PostBox>
  </div>
</template>