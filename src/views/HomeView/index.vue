<template>
  <HeroSection/>
  <Container>
    <div class="w-full grid grid-cols-2">
      <FeaturedPost/>
      <AllPosts/>
    </div>
  </Container>
  <OurMission/>
</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import HeroSection from "@/views/HomeView/HeroSection.vue";
import FeaturedPost from "@/views/HomeView/FeaturedPost.vue";
import AllPosts from "@/views/HomeView/AllPosts.vue";
import Container from "@/components/Container.vue";
import OurMission from "@/views/HomeView/OurMission.vue";
</script>