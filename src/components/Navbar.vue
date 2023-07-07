<script setup>
import CommonButton from "@/components/CommonButton.vue";
</script>

<template>
  <nav class="bg-primary py-3 sticky top-0 z-40">
    <div class="w-11/12 mx-auto flex justify-between items-center">
      <img src="../assets/images/Logo.svg" alt="logo">
      <div class="flex items-center space-x-6">
        <router-link to="/" class="text-white text-sm">Home</router-link>
        <router-link to="/blog" class="text-white text-sm">Blog</router-link>
        <router-link to="/" class="text-white text-sm">About Us</router-link>
        <router-link to="/" class="text-white text-sm">Contact Us</router-link>
        <CommonButton bg-clr="bg-white">Subscribe</CommonButton>
      </div>
    </div>
  </nav>
</template>
