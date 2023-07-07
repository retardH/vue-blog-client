<script setup>
import SocialIcons from "@/components/SocialIcons.vue";
defineProps(['author'])
</script>
<template>
  <div
       class="py-12 flex flex-col items-center flex-1 gap-0 bg-lavender rounded-sm shadow-sm" :class="author.bgClr">
    <img :src="author.image" alt="image" class="mb-3"/>
    <h4 class="text-xl text-black font-bold">{{author.name}}</h4>
    <p class="text-base text-mediumGray mb-3">{{author.jobTitle}} @Company</p>
    <SocialIcons/>
  </div>
</template>