<template>

  <div class="heroBgColor h-[349px] flex">
    <div class="flex flex-col gap-5 items-center justify-center w-96 text-center mx-auto">
      <h1 class="text-[56px] font-bold">Business</h1>
      <p class="text-mediumGray tracking-wide leading-[28px]">Lorem ipsum dolor sit amet,eriores  sf sfsdfsdff conse sequi ullam voluptates.</p>
      <div class="flex"> <span class="uppercase tracking-[3px] text-[16px]">Blog</span>  <ArrowRight/> <span class="uppercase tracking-[3px] text-[16px]">Businese</span>  </div>
    </div>
  </div>



</template>

<script setup>
import ArrowRight from  "vue-material-design-icons/ChevronRight.vue";

</script>

<style scoped >
.heroBgColor{
  background-color: rgba(244, 240, 248, 1);
}
</style>