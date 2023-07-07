<script setup>
import CommonButton from "@/components/CommonButton.vue";
import Container from "@/components/Container.vue";
import SocialIcons from "@/components/SocialIcons.vue";
</script>

<template>
    <div class="bg-primary w-full py-8">
      <Container>
      <div class="flex justify-between items-center">
        <img src="../assets/images/Logo.svg" alt="logo">
        <div class="flex items-center space-x-6">
          <router-link to="/" class="text-white text-sm">Home</router-link>
          <router-link to="/" class="text-white text-sm">Blog</router-link>
          <router-link to="/" class="text-white text-sm">About Us</router-link>
          <router-link to="/" class="text-white text-sm">Contact Us</router-link>
          <router-link to="/" class="text-white text-sm">Privacy Policy</router-link>
        </div>
      </div>
        <div class="py-12 px-10 bg-slate-950 flex items-center justify-between gap-4 mt-12">
          <h4 class="text-white text-2xl w-7/12">Subscribe to our news letter to get latest updates and
            news</h4>
          <div class="flex items-center gap-2 w-5/12">
            <input type="email" placeholder="Enter Your Email"
                   class="bg-transparent px-4 py-3 focus:outline-0 focus:ring-0 flex-1 text-mediumGray border-mediumGray border-2"/>
            <CommonButton bg-clr="bg-secondary">Subscribe</CommonButton>
          </div>
        </div>
        <div class="flex items-center justify-between mt-12">
          <div class="flex flex-col gap-1.5">
            <span class="text-sm text-white opacity-60">Finstreet 118 2561 Fintown</span>
            <span class="text-sm text-white opacity-60">finsweet@gmail.com 020 7993 2905</span>
          </div>
          <SocialIcons/>
        </div>
      </Container>

    </div>
</template>