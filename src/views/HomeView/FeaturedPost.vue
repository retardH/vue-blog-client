<script setup>
import CommonButton from "@/components/CommonButton.vue";
import ArrowRight from  "vue-material-design-icons/ChevronRight.vue";

</script>

<template>
  <div class="col-span-1 mb-16 pr-3">
    <h4 class="text-3xl text-black mb-6">Featured Post</h4>
    <div class="p-6 border-[rgba(109, 110, 118, 1)] border-2 flex flex-col gap-4">
      <img alt="feature" src="../../assets/images/featureImg.jpg" class="w-full">
      <div class="flex flex-col gap-2">
        <div class="flex items-center gap-2">
          <span class="text-sm text-slate-600">By John Doe</span>
          <span class="text-sm text-slate-600">|</span>
          <span class="text-sm text-slate-600">May 23, 2033</span>
        </div>
        <h4 class="text-black text-xl">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </h4>
        <p class="text-sm text-slate-600">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
        </p>
        <div class="flex-1 mt-2">
          <CommonButton bg-clr="bg-secondary">Read More <ArrowRight/></CommonButton>
        </div>
      </div>

    </div>

  </div>
</template>