<template>
  <div v-for="item in  first === true ? firstPage : secondPage " :key="item.tag"  class="flex flex-row-reverse justify-center items-center gap-12 my-10">
    <div class="flex flex-col gap-2">
      <p class="tagColor font-semibold text-base tracking-wider">{{item.tag}}</p>
      <h1 class="leading-10 text-4xl font-bold">{{item.title}}</h1>
      <p class="leading-7  font-normal text-base" >{{item.body}}</p>
    </div>
    <div>
      <img :src="item.img"  alt="image"/>
    </div>
  </div>
  <div class="flex gap-8 justify-center items-center">
    <button @click="firstPaginate" class="flex justify-center items-center  " :class="first?'activeBtn':'unactiveBtn'"><ArrowLeft/>  Prev  </button>

    <button @click="secondPaginate" class="flex justify-center items-center" :class="second?'activeBtn':'unactiveBtn'" >Next <ArrowRight/> </button>

  </div>

</template>

<script setup>
import {computed, ref} from "vue";
import startup from "@/assets/images/BlogImage/startup.jpg"
import photo1 from '@/assets/images/BlogImage/photo1.jpg'
import photo2 from '@/assets/images/BlogImage/photo2.jpg'
import photo3 from '@/assets/images/BlogImage/photo3.jpg'
import photo4 from '@/assets/images/BlogImage/photo4.jpg'
import ArrowRight from  "vue-material-design-icons/ChevronRight.vue";
import ArrowLeft from  "vue-material-design-icons/ChevronLeft.vue";
let first=ref(true);
let second =ref(false);
const totalPosts=ref([
  {
    tag:"STARTUP",
    title:"Design tips for designers that cover everything you need",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:startup
  },
  {
    tag:"BUSINESS",
    title:"How to build rapport with your web design clients",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:photo1
  },
  {
    tag:"STARTUP",
    title:"Logo design trends to avoid in 2022",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:photo3
  },
  {
    tag:"TECHNOLOGY",
    title:"8 Figma design systems you can download for free today",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:photo2
  },
  {
    tag:"ECONOMY",
    title:"Font sizes in UI design: The complete guide to follow",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:photo4
  },
  {
    tag:"TECHNOLOGY",
    title:"8 Figma design systems you can download for free today",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:photo2
  },
  {
    tag:"ECONOMY",
    title:"Font sizes in UI design: The complete guide to follow",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:photo4
  },
  {
    tag:"BUSINESS",
    title:"How to build rapport with your web design clients",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:photo1
  },
  {
    tag:"STARTUP",
    title:"Logo design trends to avoid in 2022",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:photo3
  },
  {
    tag:"STARTUP",
    title:"Logo design trends to avoid in 2022",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:photo3
  },

])
const firstPaginate=()=>{
  console.log("hello first")
  first.value = true
  second.value = false
}
const secondPaginate=()=>{
  first.value = false
  second.value = true
}

const firstPage=computed(()=>{
  return totalPosts.value.slice(1,6)
})
const secondPage=computed(()=>{
  return totalPosts.value.slice(5,10)
})

</script>

<style scoped>

.tagColor{
  color: Purple;
}
.unactiveBtn{
  color: #6D6E76;

}
.activeBtn{
  font-size: 16px;
  font-weight: bold;
}
</style>