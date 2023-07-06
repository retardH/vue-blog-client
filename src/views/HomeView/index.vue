<template>
  <Navbar/>
  <HeroSection/>
  <div class="w-11/12 grid mx-auto grid-cols-2">
    <FeaturedPost/>
    <AllPosts/>
  </div>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import HeroSection from "@/views/HomeView/HeroSection.vue";
import FeaturedPost from "@/views/HomeView/FeaturedPost.vue";
import AllPosts from "@/views/HomeView/AllPosts.vue";
</script>