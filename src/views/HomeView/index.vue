<template>
  <HeroSection/>
  <Container>
    <div class="w-full grid grid-cols-2 mb-24">
      <FeaturedPost/>
      <AllPosts/>
    </div>
  <OurMission/>
    <AuthorLists/>
    <Testimonials/>
  </Container>

</template>

<script setup>
import Navbar from "@/components/Navbar.vue";
import HeroSection from "@/views/HomeView/HeroSection.vue";
import FeaturedPost from "@/views/HomeView/FeaturedPost.vue";
import AllPosts from "@/views/HomeView/AllPosts.vue";
import Container from "@/components/Container.vue";
import OurMission from "@/views/HomeView/OurMission.vue";
import AuthorLists from "@/views/HomeView/AuthorLists.vue";
import Testimonials from "@/views/HomeView/Testimonials.vue";
</script>