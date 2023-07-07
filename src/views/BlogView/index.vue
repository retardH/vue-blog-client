<template>
  <HeroSection/>

  <div class="px-16 lg:px-24 max-w-[2000px] mx-auto" >

    <AllPosts/>
    <AllCategories/>
    <JoinOurTeam/>
  </div>
</template>
<script setup>
import HeroSection from "@/views/BlogView/HeroSection.vue";
import AllPosts from "@/views/BlogView/AllPosts.vue";
import AllCategories from "@/views/BlogView/AllCategories.vue";
import JoinOurTeam from "@/views/BlogView/JoinOurTeam.vue";
</script>