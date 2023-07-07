<script setup>
import CommonButton from "@/components/CommonButton.vue";
import Container from "@/components/Container.vue";
import FB from  "vue-material-design-icons/Facebook.vue";
import Twitter from  "vue-material-design-icons/Twitter.vue";
import Instagram from  "vue-material-design-icons/Instagram.vue";
import Linkedin from  "vue-material-design-icons/Linkedin.vue";

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
          <CommonButton bg-clr="bg-white">Subscribe</CommonButton>
        </div>
      </div>
        <div class="py-12 px-10 bg-slate-950 flex items-center justify-between gap-4 mt-6">
          <h4 class="text-white text-2xl w-7/12">Subscribe to our news letter to get latest updates and
            news</h4>
          <div class="flex items-center gap-2 w-5/12">
            <input type="email" placeholder="Enter Your Email"
                   class="bg-transparent px-4 py-3 focus:outline-0 focus:ring-0 flex-1 text-mediumGray border-mediumGray border-2"/>
            <CommonButton bg-clr="bg-secondary">Subscribe</CommonButton>
          </div>
        </div>
        <div class="flex items-center justify-between mt-6">
          <div class="flex flex-col gap-1.5">
            <span class="text-sm text-mediumGray">Finstreet 118 2561 Fintown</span>
            <span class="text-sm text-mediumGray">finsweet@gmail.com 020 7993 2905</span>
          </div>
          <div class="flex items-center gap-4">
            <FB class="text-mediumGray"/>
            <Twitter class="text-mediumGray"/>
            <Instagram class="text-mediumGray"/>
            <Linkedin class="text-mediumGray"/>
          </div>
        </div>
      </Container>

    </div>
</template>