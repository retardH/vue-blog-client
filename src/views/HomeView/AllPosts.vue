<script setup>
import PostBox from "@/components/PostBox.vue";
import router from "@/router";
</script>

<template>
  <div class="col-span-1 pl-3">
    <div class="w-full flex items-center justify-between">
      <h4 class="text-3xl text-black mb-6">All Posts</h4>
      <button class="bg-transparent text-violet-500 text-base" @click="router.push('/blog')">View All</button>
    </div>
    <div class="flex flex-col">
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
  </div>
</template>