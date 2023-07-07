<template>
  <div class="flex justify-between gap-10 ">
      <div>
        <div v-for="(item,index) in data" :key="index" >
          <PostCards :item="item"  />
        </div>
      </div>
    <div >
      <h1>Categories</h1>
      <CategoryCard/>
    </div>
  </div>
</template>

<script setup >
import PostCards from "@/components/PostCards.vue";
import {ref} from "vue";
import photo1 from "@/assets/images/BlogImage/photo1.jpg";
import CategoryCard from "@/views/CategoryView/CategoryCard.vue";
const data=ref([
  {
    tag:"BUSINESS",
    title:"How to build rapport with your web design clients",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:photo1
  },
  {
    tag:"BUSINESS",
    title:"How to build rapport with your web design clients",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:photo1
  },
  {
    tag:"BUSINESS",
    title:"How to build rapport with your web design clients",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:photo1
  },
  {
    tag:"BUSINESS",
    title:"How to build rapport with your web design clients",
    body:"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
    img:photo1
  },
])
</script>