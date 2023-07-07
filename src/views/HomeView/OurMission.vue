<script setup>

import Container from "@/components/Container.vue";
import ArrowRight from "vue-material-design-icons/ChevronRight.vue";
</script>

<template>
  <Container>
    <div class="w-full bg-lavender py-24 px-12 flex items-start gap-8 mt-6 mb-16 relative">
      <div class="w-6/12 flex flex-col gap-4">
        <h4 class="text-black text-lg uppercase">about us</h4>
        <h1 class="font-bold text-black text-5xl">We are a community of content writers who share their
          learning</h1>
        <p class="text-mediumGray text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div class="flex-1 mt-2 flex items-center">
          <a class="text-purple-500">
            Read More
          </a>
          <ArrowRight class="text-purple-500"/>
        </div>
      </div>
      <div class="w-6/12 flex flex-col gap-4">
        <h4 class="text-black text-lg">Our Mission</h4>
        <h1 class="font-bold text-black text-4xl">Creating valuable content for creatives all around the world</h1>
        <p class="text-mediumGray text-base">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div class="absolute h-6 inset-x-0 -top-6 flex justify-center items-center">
        <div class="w-full h-full flex items-center justify-end">
          <div class="w-5/12 bg-yellow-300 h-full"></div>
          <div class="w-3/12 bg-purple-800 h-full"></div>
        </div>
      </div>
    </div>
  </Container>
</template>