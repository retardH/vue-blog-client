<template>
<template class="grid grid-cols-5 gap-8  heroBgColor">
<template class="col-span-3 p-16 flex flex-col gap-4">
  <p>Featured Post</p>
  <div class="font-bold text-4xl">
    Step-by-step guide to choosing great font pairs
  </div>
  <span class="font-medium text-[14px]  leading-5 ">By John Doe   l   May 23, 2022 </span>
  <p class="text-base font-normal ">
    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.
  </p>
  <div>
    <common-button bg-clr="bg-secondary flex justify-center " >
      Read More
      <ArrowRight/>
    </common-button>
  </div>


</template>
  <div class="col-span-2 p-10 mt-2">
<img  :src="Image" alt="heroSectionImage" />
  </div>
</template>
</template>

<script>
import CommonButton from "@/components/CommonButton.vue";
import ArrowRight from  "vue-material-design-icons/ChevronRight.vue";
import HeroSectionImage from  "@/assets/images/BlogImage/herosection.png"
import {ref} from "vue";
export default {
  components:{CommonButton ,ArrowRight},
  setup(){
   let  Image =ref(HeroSectionImage)
    return{Image}
  }
}
</script>

<style scoped >
.heroBgColor{
  background-color: rgba(244, 240, 248, 1);
}



</style>
