<script setup>
import heroImg from '../../assets/images/heroImg.jpg';
import CommonButton from "@/components/CommonButton.vue";
</script>

<template>
  <div
      class="w-full h-[720px] relative flex items-center px-14 bg-center object-contain object-left hero-section mb-16">
    <div class="absolute -z-0 overlay inset-0"></div>
    <div class="w-3/5 z-10 flex flex-col items-start gap-4">
      <h4 class="text-white uppercase font-bold text-base">
        posted on startup
      </h4>
      <h2 class="text-white font-bold text-5xl">
        Step-by-step guide to choosing great font pairs
      </h2>
      <div class="flex items-center space-x-1.5">
        <span class="text-white text-sm">By</span>
        <span class="text-amber-500 text-sm">James West</span>
        <span class="text-white text-sm"> May 23, 2022</span>
      </div>
      <p class="text-white text-sm w-3/5 mb-4">
        Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
      </p>
      <CommonButton bg-clr="bg-secondary">Read More</CommonButton>
    </div>

  </div>
</template>

<style>
.hero-section {
  background-image: url("../../assets/images/heroImg.jpg");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
}

.overlay {
  background: rgba(0,0,0,0.4);
}

</style>