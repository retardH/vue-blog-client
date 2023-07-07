<template>
  <HeroSection/>
  <div class="p-14" >
    <AllPosts/>
    <AllCategories/>
  </div>
</template>
<script setup>
import HeroSection from "@/views/BlogView/HeroSection.vue";
import AllPosts from "@/views/BlogView/AllPosts.vue";
import AllCategories from "@/views/BlogView/AllCategories.vue";
</script>